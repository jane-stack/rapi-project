import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-container'>
      <div className='nav-child-1'>
        <div className='menu-container'>
          <div className='menu-trigger'>
            <img src='hamicon.png' alt='hamicon' width='20px' />
          </div>
        </div>
      </div>
      <div className='nav-child-2'>
        <img src='whitelogo.png' alt='rapilogo' width='80px' />
      </div>
      <div className='nav-child-3'>
        <Link>Login</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar