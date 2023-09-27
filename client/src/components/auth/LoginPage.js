import React, { useState } from 'react';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';

function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <div>
          <LoginForm />
            <p>Create an Account &nbsp;
              <button className='sign-btn' onClick={() => setShowLogin(false)}>SIGNUP</button>
            </p>
        </div>
      ):(
        <div>
          <SignupForm />
            <p>Create an Account &nbsp;
              <button className='sign-btn' onClick={() => setShowLogin(true)}>LOGIN</button>
            </p>
        </div>
      )}
    </div>
  )
}

export default LoginPage