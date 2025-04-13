import React from 'react'
import "./checkInAttendee.css"

const CheckInAttendee = () => {
  return (
    <div className='checkInAttendee'>
      <nav className='checkInAttendee__nav'>
        <p style={{color:"black"}}><b>All events</b></p>
        <p>upcoming events</p>
         <p>ongoing event</p>
        <p>ended event</p>
        <input type="text" placeholder="search for event" className='navInpit'/>
      </nav>
    </div>
  )
}

export default CheckInAttendee