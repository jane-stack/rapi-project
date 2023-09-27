import React from 'react'

function CarPage() {
  return (
    <div className='bottomhomediv'>
      <h2><strong>Our Impressive Collection of Cars</strong></h2>
      <div className='car-intro-div'>
      <p>Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</p>
      </div>
      <div className='button-div'>
        <div className='car-btn-div'><button className='car-button'>Popular Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Luxury Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Vintage Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Family Car</button></div>
        <div className='car-btn-div'><button className='car-button'>Off-Road Car</button></div>
      </div>
      <div className='button-div'>
      <div className='all-car-btn-div'>
      <button className='all-car-btn'>See All Cars</button>
      </div>
      </div>
    </div>
  )
}

export default CarPage