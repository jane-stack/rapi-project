import React from 'react'

function Footer() {
  return (
    <div className='foot-container'>
      <div className='foot-child-1'>
        <img src='whitelogo.png' alt='rapilogo' width='60px' />
      </div>
      <div className='foot-child-2'>
        <div className='footer-links'><h5>Object One</h5></div>
        <div className='footer-links'><h5>Object Two</h5></div>
        <div className='footer-links'><h5>Object Three</h5></div>
      </div>
      <div className='foot-child-3'>
        <div>
                <a href="https://www.facebook.com/profile.php?id=61551616851965" target="_blank" rel="noreferrer">
                    <img src="logo-facebookpng-32236.png" alt="facebooklogo" width='80px' />
                </a>
          </div>
      </div>
    </div>
  )
}

export default Footer