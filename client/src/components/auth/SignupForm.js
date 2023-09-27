import React from 'react'

function SignupForm() {
  return (
    <form className="form-login">
      <img src='whitelogo.png' alt='rapilogo' width='100px' />
      <h3>Create An Account</h3>
      <div>
      <input
      className="login-input"
      type="text"
      name="email"
      id="email"
      placeholder="Email"
      />
      </div>
      <div>
      <input
      className="login-input"
      type="password"
      name="password"
      id="password"
      placeholder="Password"
      />
      </div>
      <div>
      <input
      className="login-input"
      type="password_confirmation"
      name="password_confirmation"
      id="password_confirmation"
      placeholder="Re-Enter Password"
      />
      </div>
      <button type="submit" className="login-btn">Sign In</button>
  </form>
  )
}

export default SignupForm