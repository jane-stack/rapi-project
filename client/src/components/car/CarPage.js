import React from 'react'

function CarPage() {
  return (
    <div className='bottomhomediv'>
      <h3><strong>Our Impressive Collection of Cars</strong></h3>
      <p>Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online.</p>
      <div className='button-div'>
        <div className='car-btn-div'><button className='car-button'>Popular Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Luxury Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Vintage Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Family Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Off-Road Car</button></div>
      </div>
    </div>
  )
}

export default CarPage