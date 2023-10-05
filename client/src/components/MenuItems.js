import React from 'react'
import { Link } from 'react-router-dom'

function MenuItems() {
  return (
    <div className='menu-trigger'>
        <Link to="/" className='nav-link'>HOME</Link><br /> 
        <Link to="/rent" className='nav-link'>FIND A CAR</Link><br /> 
        <Link to="/review" className='nav-link'>CUSTOMER TESTIMONIALS</Link><br /> 
        <Link to="/account" className='nav-link'>ACCOUNT</Link><br /> 
    </div>
  )
}

export default MenuItems