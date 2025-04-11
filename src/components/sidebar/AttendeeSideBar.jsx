import React from 'react'
import "./attendeeSidebar.css"
import { SlCalender } from "react-icons/sl";
import { LuTicket } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import {  useNavigate } from 'react-router-dom';

const AttendeeSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className='attendee-sidebar'>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/upcoming-events")}>
        <p className='AttendeeTextsP'> <SlCalender/> Upcoming Event</p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/past-events")}>
        <p className='AttendeeTextsP'> <LuTicket/> Past Event</p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/event-favorite")}>
       <p className='AttendeeTextsP'> <FaHeart/> Event favorite</p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/past-events")}>
       <p className='AttendeeTextsP'> <IoSettingsSharp/> Settings</p></div>
     <div className='logoutAtt'>  <p className='logoutAttP'><nav className='nav'><IoLogOut/>Logout</nav> </p></div>
      </div>
  )
}

export default AttendeeSideBar