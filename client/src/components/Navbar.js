import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

function Navbar() {
  const [openMenuMode, setOpenMenuMode] = useState(false);
  const openMenu = () => setOpenMenuMode(openMenuMode => !openMenuMode);

  return (
    <div className='navbar'>
      <div className='nav-container'>
      <div className='nav-child-1'>
        <div>
          <img src='hamicon.png' alt='hamicon' width='20px' onClick={openMenu} />
          <div className='dropdown-menu'>
            {openMenuMode && <MenuItems/>}
          </div>
        </div>
      </div>
      <div className='nav-child-2'>
        <img src='whitelogo.png' alt='rapilogo' width='80px' />
      </div>
      <div className='nav-child-3'>
        <Link className='nav-link' to="/loginpage">Login</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar