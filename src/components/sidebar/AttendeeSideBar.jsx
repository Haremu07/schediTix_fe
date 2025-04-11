import React, { useState } from 'react'
import "./attendeeSidebar.css"
import { SlCalender } from "react-icons/sl";
import { LuTicket } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import {  useNavigate } from 'react-router-dom';

const AttendeeSideBar = () => {
  const navigate = useNavigate();

  const [isActive, setIsActive ] = useState("Upcoming Event")
  // const []
  return (
    <div className='attendee-sidebar'>
     <div className="AttendeeTexts"
     onClick={() => navigate("/dashboard/upcoming-events")}>
        <p className={`${isActive === "Upcoming Event" ? "ACTIVE" : 'AttendeeTextsP'}`} 
          onClick={() => setIsActive("Upcoming Event")} >
             <SlCalender/> Upcoming Event</p></div>
     <div className='AttendeeTexts' 
     onClick={() => navigate("/dashboard/past-events")}>
        <p className={`${isActive === "Past Event" ? "ACTIVE" : 'AttendeeTextsP' }`}
          onClick={() => setIsActive("Past Event")}> 
          <LuTicket/> Past Event</p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/event-favorite")}>
       <p className={`${isActive === "Event favorite" ? "ACTIVE" : 'AttendeeTextsP' }`}
          onClick={() => setIsActive("Event favorite")}
       > <FaHeart/> Event favorite</p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/past-events")}>
       <p className={`${isActive === "Settings" ? "ACTIVE" : 'AttendeeTextsP' }`}
          onClick={() => setIsActive("Settings")}
       > <IoSettingsSharp/> Settings</p></div>
     <div className='logoutAtt'>  <p className='logoutAttP'><nav className={`${isActive === "Logout" ? "ACTIVE" : 'nav' }`}
      onClick={() => setIsActive("Logout")}
     ><IoLogOut/>Logout</nav> </p></div>
      </div>
  )
}

export default AttendeeSideBar