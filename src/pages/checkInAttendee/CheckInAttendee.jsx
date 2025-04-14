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

      <table className='tableSS'> 
        <tbody className='rowSS'>
          <tr className='tr'>
            <td>Event</td>
            <td>Attendee</td>
            <td>Cdeck In</td>
            <td>Cdeck Out</td>
            <td>Status</td>
          </tr>
          <tr className='tr'>
            <td>Event</td>
            <td>Attendee</td>
            <td>Cdeck In</td>
            <td>Cdeck Out</td>
            <td>Status</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CheckInAttendee