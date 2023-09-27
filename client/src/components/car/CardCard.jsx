import React from 'react'

function CardCard() {
  return (
    <div className='image-container'>
        <div className='car-image-div'><img src='audicar.jpeg' alt='audi2022' className='car-image'/></div>
        <div className='image-title'>Audi A8 L 2022</div>
        <div className='image-price'><strong>78.90</strong>/day</div>
        <br />
        <br />
        <div>
        <button className='rent-now-btn'>RENT NOW</button>
        </div>
    </div>
  )
}

export default CardCard