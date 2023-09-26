import React from 'react'
import { Link } from 'react-router-dom'

function MenuItems() {
  return (
    <div className='menu-trigger'>
        <Link to="/" className='nav-link'>HOME</Link><br /> 
        <Link to="/" className='nav-link'>ABOUT</Link><br /> 
        <Link to="/review" className='nav-link'>CUSTOMER TESTIMONIALS</Link><br /> 
    </div>
  )
}

export default MenuItems