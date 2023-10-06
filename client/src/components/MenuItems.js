import React from 'react'
import { Link } from 'react-router-dom'

function MenuItems({handleLinkClick}) {
  return (
    <div className='menu-trigger'>
        <Link to="/" className='nav-link' onClick={handleLinkClick}>HOME</Link><br /> 
        <Link to="/rent" className='nav-link' onClick={handleLinkClick}>FIND A CAR</Link><br /> 
        <Link to="/review" className='nav-link' onClick={handleLinkClick}>CUSTOMER TESTIMONIALS</Link><br /> 
        <Link to="/account" className='nav-link' onClick={handleLinkClick}>ACCOUNT</Link><br /> 
    </div>
  )
}

export default MenuItems