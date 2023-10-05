import React, { useContext, useEffect, useState } from 'react'
import { ErrorContext } from '../../context/ErrorContext'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Errors from '../../errors/Errors';
import Icon from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye';
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed';


function SignupForm() {
  const { setErrors } = useContext(ErrorContext);
  const { addUser, loginUser, loggedIn } = useContext(UserContext);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const navigate = useNavigate();
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");

  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    } else {
      return (
        setErrors([])
      )
    }
  }, [loggedIn, navigate, setErrors])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/signup`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        password_confirmation
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors) {
        setErrors(data.errors);
        setPassword(!data.errors);
      } else {
        addUser(data);
        loginUser(data);
        navigate('/')
      }
    })
  }

  return (
    <form className="form-signup" onSubmit={handleSubmit}>
      <img src='whitelogo.png' alt='rapilogo' width='100px' />
      <h3>Create An Account</h3>
      <div className='input-box'>
      <input
      className="login-input"
      type="text"
      name="first_name"
      id="first_name"
      placeholder="First Name"
      value={first_name}
      onChange={(e) => setFirst_name(e.target.value)}
      />
      </div>
      <div className='input-box'>
      <input
      className="login-input"
      type="text"
      name="last_name"
      id="last_name"
      placeholder="Last Name"
      value={last_name}
      onChange={(e) => setLast_name(e.target.value)}
      />
      </div>
      <div className='input-box'>
      <input
      className="login-input"
      type="text"
      name="email"
      id="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className='input-box input-with-icon-div'>
      <input
      className='custom-input'
      type={type1}
      name="password"
      // id="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      {type1 === "password" ? (
        <span className='icon-span' onClick={() => setType1("text")}>
          <Icon icon={basic_eye_closed} size={15} />
        </span>
      ):(
        <span className='icon-span' onClick={() => setType1("password")}>
          <Icon icon={basic_eye} size={15} />
        </span>
      )}
      </div>
      <div className='input-box input-with-icon-div'>
      <input
      className="custom-input"
      type={type2}
      name="password_confirmation"
      id="password_confirmation"
      placeholder="Re-Enter Password"
      value={password_confirmation}
      onChange={(e) => setPassword_confirmation(e.target.value)}
      />
      {type2 === "password" ? (
        <span className='icon-span' onClick={() => setType2("text")}>
          <Icon icon={basic_eye_closed} size={15} />
        </span>
      ):(
        <span className='icon-span' onClick={() => setType2("password")}>
          <Icon icon={basic_eye} size={15} />
        </span>
      )}
      </div>
      <button type="submit" className="login-btn">Create Account</button>
      {/* <div className='validation-box'>
        <p>A <strong>lowercase</strong> letter</p>
        <p>A <strong>Uppercase</strong> letter</p>
        <p>A <strong>number</strong></p>
        <p>A <strong>special character</strong></p>
        <p>Minimum <strong>8 characters</strong></p>
      </div> */}
      <Errors />
  </form>
  )
}

export default SignupForm