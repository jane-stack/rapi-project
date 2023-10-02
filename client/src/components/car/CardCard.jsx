import React from 'react'

function CardCard() {
  return (
    <div className='image-container'>
        <div><img src='audicar.jpeg' alt='audi2022' className='car-image'/></div>
        <br />
        <div className='car-body'>
          <div className='image-title'>Audi A8 L 2022</div>
          <div className='image-price'><strong>78.90</strong>/day</div>
          <br />
            <div className='card-section'>
            </div>
          <br />
          <button className='car-detail-btn'>Details</button>
        </div>
    </div>
  )
}

export default CardCard