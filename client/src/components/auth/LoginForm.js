import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { ErrorContext } from '../../context/ErrorContext';
import Errors from '../../errors/Errors';
import Icon from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye';
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed';

function LoginForm() {
  const { loginUser, loggedIn } = useContext(UserContext);
  const { setErrors } = useContext(ErrorContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");

  useEffect(() => {
    if (loggedIn) {
      navigate('/account')
    } else {
      return (
        setErrors([])
      )
    }
  }, [loggedIn, navigate, setErrors])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors) {
        setErrors(data.errors);
        setPassword("");
      } else {
        loginUser(data);
        navigate('/account')
      }
    })
  }

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <img src='whitelogo.png' alt='rapilogo' width='100px' />
      <h3>SIGN IN</h3>
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
      className="custom-input"
      type={showPassword}
      name="password"
      id="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      {showPassword === "password" ? (
        <span className='icon-span' onClick={() => setShowPassword("text")}>
          <Icon icon={basic_eye_closed} size={15} />
        </span>
      ):(
        <span className='icon-span' onClick={() => setShowPassword("password")}>
          <Icon icon={basic_eye} size={15} />
        </span>
      )}
      </div>
      <button type="submit" className="login-btn">Sign In</button>
      <Errors />
  </form>
  )
}

export default LoginForm