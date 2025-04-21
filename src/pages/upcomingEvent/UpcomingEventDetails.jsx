import React, { useEffect, useState } from 'react'
import "./upcoming.css"
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BsFillClockFill } from "react-icons/bs";
import EventDetails from './EventDetails';
import UpcomingEventImage from "../../assets/upcmingEventImage.jpg"
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';

// import AddedPopUp from './AddedPopUp';

const UpcomingEventDetails = () => {
    const navigate = useNavigate()
    const [eventDetails, setEventDetails] = useState(null);
  const { id } = useParams();
    const BASEURL = "https://scheditix.onrender.com";

    useEffect(() => {
      const handleEventDetails = async () => {
        try {
          const res = await axios.get(`${BASEURL}/api/v1/event/${id}`);
          setEventDetails(res.data.data)
          console.log(res.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      handleEventDetails();
    }, [id]);
  
    if (!eventDetails) return <div>Loading...</div>;
  return (
    <div className="upcoming-event">
        <div className="upcoming-evenr-header">
        <IoIosArrowBack   size={25}/> 
            <h5 onClick={() => navigate("/dashboard/upcoming-events")}>back</h5>
        </div>
      <div className='upimgDiv'>
        <section className='upImgDiv'>
        <img src={eventDetails?.image?.imageUrl} alt="" />
        </section>
        
        <section className='upTextDiv'>
          <h3>{eventDetails?.eventTitle}</h3>
          <nav className='upTExtDate'> 
          <SlCalender className='uptextDateIcone'/>
          <p><b>{eventDetails?.startDate}</b></p>
          </nav>
          <nav className='upTExtDate'>
          <BsFillClockFill className='uptextDateIcone'/>
          <p><b> {eventDetails?.startTime}</b></p>
           </nav>
          <nav className='upTExtDate'> 
          <FaLocationDot className='uptextDateIcone'/>
          <p><b> {eventDetails?.eventLocation}</b></p>
          </nav>
          {/* <p className='seatnumber'>Seat number: Table1-seat5</p>
          <p className='checkin'>check in code: <span>38AT</span></p> */}
        </section>
      </div>
      <EventDetails eventDetails={eventDetails}   />
    </div>
  )
}

export default UpcomingEventDetails