import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import MenuItems from './MenuItems';
import Icon from 'react-icons-kit';
import {bars} from 'react-icons-kit/fa/bars'

function Navbar() {
  const { loggedIn, logoutUser } = useContext(UserContext);
  const [openMenuMode, setOpenMenuMode] = useState(false);
  const openMenu = () => setOpenMenuMode(openMenuMode => !openMenuMode);
  const navigate = useNavigate('/');

  const signoutUser = () => {
    fetch(`/logout`, { method: "DELETE" })
    .then(logoutUser)
    .then(() => navigate('/'))
  }

  const signedIn = () => {
    return (
      <div>
        <Link className='nav-link-login' to="#" onClick={signoutUser}>Logout</Link>
      </div>
    )
  }

  const signedOut = () => {
    return (
      <div>
        <Link className='nav-link-login' to="/loginpage">Login</Link>
      </div>
    )
  }

  return (
    <div className='navbar'>
      <div className='nav-container'>
        <div className='nav-child-1'>
          <div>
            {/* <img src="hamicon.png" alt='hamicon' width='30px' onClick={openMenu} /> */}
            <span className='icon-span' onClick={openMenu}>
              <Icon icon={bars} size={25} />
            </span>
            <div className='dropdown-menu'>
              {openMenuMode && <MenuItems/>}
            </div>
          </div>
        </div>
        <div className='nav-child-2'>
          <img src='whitelogo.png' alt='rapilogo' width='100px' />
        </div>
        <div className='nav-child-3'> 
          {loggedIn ? signedIn() : signedOut()}  
        </div>
      </div>
    </div>
  )
}

export default Navbar