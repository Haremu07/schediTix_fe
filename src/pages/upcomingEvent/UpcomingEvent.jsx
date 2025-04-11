import React from 'react'
import "./upcoming.css"
import { FaLocationDot } from "react-icons/fa6";
import EventDetails from './EventDetails';

const UpcomingEvent = () => {
  return (
    <div className="upcoming-event">
      <div className='upimgDiv'>
        <section className='upImgDiv'>
        <img src="" alt="" />
        </section>
        
        <section className='upTextDiv'>
          <h1>MyKealwise Live in Aj City</h1>
          <nav className='upTExtDate'> 
          <FaLocationDot className='uptextDateIcone'/>
          <p><b>26 August 2025</b></p>
          </nav>
          <nav className='upTExtDate'>
          <FaLocationDot className='uptextDateIcone'/>
          <p><b>6pm wat</b></p>
           </nav>
          <nav className='upTExtDate'> 
          <FaLocationDot className='uptextDateIcone'/>
          <p><b>Abayomi Mutipurpose hall, Ajegunle,<br />Lagos, Nigeria</b></p>
          </nav>
          <p className='seatnumber'>Seat number: Table1-seat5</p>
          <p className='checkin'>check in code: <span>38AT</span></p>
        </section>
      </div>
      <EventDetails/>
    </div>
  )
}

export default UpcomingEvent