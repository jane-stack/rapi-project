import React from 'react'

function ReviewPage() {
  return (
    <div className='customer-review'>
      <h2>What Our Customers Say</h2>
      <p>“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”</p>
      <br />
      <div className='customer-information'>
        <div className='profile-picture'></div>
        <div className='profile-info'>
          <strong>Customer Name</strong>
          <br />
          <p className='customer-from'>From Texas</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage