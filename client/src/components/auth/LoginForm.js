import React from 'react'

function LoginForm() {
  return (
    <form className="form-login">
      <img src='whitelogo.png' alt='rapilogo' width='100px' />
      <h3>SIGN IN</h3>
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
      <button type="submit" className="login-btn">Sign In</button>
  </form>
  )
}

export default LoginForm