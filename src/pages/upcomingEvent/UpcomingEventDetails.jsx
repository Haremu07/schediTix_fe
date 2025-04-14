import React, { useState } from 'react'
import "./upcoming.css"
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BsFillClockFill } from "react-icons/bs";
import EventDetails from './EventDetails';
import UpcomingEventImage from "../../assets/upcmingEventImage.jpg"
import { useNavigate } from 'react-router-dom';
import { FaLessThan } from "react-icons/fa";
// import AddedPopUp from './AddedPopUp';

const UpcomingEventDetails = () => {
    const navigate = useNavigate()
  
  return (
    <div className="upcoming-event">
        <div className="upcoming-evenr-header">
            <h5 onClick={() => navigate("/dashboard/upcoming-events")}><FaLessThan size={25}/> back</h5>
        </div>
      <div className='upimgDiv'>
        <section className='upImgDiv'>
        <img src={UpcomingEventImage} alt="" />
        </section>
        
        <section className='upTextDiv'>
          <h1>MyKealwise Live in Aj City</h1>
          <nav className='upTExtDate'> 
          <SlCalender className='uptextDateIcone'/>
          <p><b>26 August 2025</b></p>
          </nav>
          <nav className='upTExtDate'>
          <BsFillClockFill className='uptextDateIcone'/>
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

export default UpcomingEventDetails