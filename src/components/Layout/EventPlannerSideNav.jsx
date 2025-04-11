import React, { useState } from 'react'
import "./eventplannerDashboard.css"
import { SlCalender } from "react-icons/sl";
import { FaAmazonPay } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { ImUserCheck } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import {  useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { BsFillHddStackFill } from "react-icons/bs";

const EventPlannerSideNav = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Overview")
  return (
    <div className='attendee-sidebar'>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/overview")}>
        <p className={`${isActive === "Overview" ? "ACTIVE" : "AttendeeTextsP" }`}
        onClick={() => setIsActive("Overview")}
        > <SlCalender/> Overview</p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/create-event")}>
        <p  className={`${isActive === "Create Event" ? "ACTIVE" : "AttendeeTextsP" }`}
        onClick={() => setIsActive("Create Event")}
        > <FaPlus/> Create Event</p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/manage-event")}>
       <p className={`${isActive === "Manage Event" ? "ACTIVE" : "AttendeeTextsP" }`}
        onClick={() => setIsActive("Manage Event")}
  > <BsFillHddStackFill/> Manage Event </p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/payout-details")}>
       <p className={`${isActive === "Payout Account" ? "ACTIVE" : "AttendeeTextsP" }`}
       onClick={() => setIsActive("Payout Account")}
       > <FaAmazonPay/> Payout Account </p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/checkin")}>
       <p className={`${isActive === "Check In Attendee" ? "ACTIVE" : "AttendeeTextsP" }`}
       onClick={() => setIsActive("Check In Attendee")}
       > <ImUserCheck/> Check In Attendee </p></div>
     <div className='AttendeeTexts' onClick={() => navigate("/dashboard/profile")}>
       <p className={`${isActive === "Settings" ? "ACTIVE" : "AttendeeTextsP" }`}
       onClick={() => setIsActive("Settings")}
       > <IoSettingsSharp/> Settings</p></div>
     <div className='logoutAtt'>  <p className= {`${isActive === "Logout" ? "ACTIVE" : "logoutAttP" }`}
       onClick={() => setIsActive("Logout")}
     ><nav className='nav'><IoLogOut/>Logout</nav> </p></div>
      </div>
  )
}

export default EventPlannerSideNav