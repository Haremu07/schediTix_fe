import React, { useEffect, useState } from 'react'
import '../../pages/eventDetails/eventDetails.css'
import { CiCalendarDate } from "react-icons/ci";
import { TbClock } from "react-icons/tb";
import { MdLocationOn, MdFavoriteBorder } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoChevronBack } from "react-icons/io5";

const EventDetails = () => {
  const navigate = useNavigate();
  const { eventId } = useParams()

  const [event, setEvent] = useState([])

     const BASEURL = "https://scheditix.onrender.com";
    
      const handleEventDetails = async() => {
        try {
        const response = await axios.get(`${BASEURL}/api/v1/event/${eventId}`)
        setEvent(response.data.data)
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
      
      useEffect(() => {
        handleEventDetails()
      },[])

  return (
    <div className='eventdetails-bg'>
      

      <div className='eventdetails-wrapper'>
        <div className='eventdetailsHeader'>
          <IoChevronBack size={30} style={{cursor: "pointer"}} onClick={() => {
          navigate("/event-categories")
        }}/>
        <h3 style={{cursor: "pointer"}} onClick={() => {
          navigate("/event-categories")
        }}>Shows</h3>
        <p>-</p>
        <h3 style={{color: "purple"}}>{event.eventCategory?.categoryName}</h3>
        <p>-</p>
        <h3 style={{color: "purple"}}>{event.eventTitle}</h3>
 
        </div>
        <div className='eventdetails-billboard-bg'>
          <div className='eventdetails-billboard-wrapper'>
            <div className='eventdetails-billboard-image'>
              <img className='EventImg' src={event.image?.imageUrl} alt="" />
            </div>
            <div className='eventdetails-billboard-text'>
              <div className='eventdetails-billboard-text-one'>
                <h2 >{event.eventTitle }</h2>
              </div>
              <div className='eventdetails-billboard-text-two'>
                <p className='icon'><CiCalendarDate /></p>
                <h3 className='text-calendar'>{event.startDate}</h3>
              </div>
              <div className='eventdetails-billboard-text-three'>
                <p className='icon'><TbClock /></p>
                <p className='text-time'>{event.startTime}</p>
              </div>
              <div className='eventdetails-billboard-text-four'>
                <p className='icon'><MdLocationOn /></p>
                <h3 className='text-address'>{event.eventLocation}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='details-bg'>
          <div className='details-wrapper'>
            <div className='event-rules-box'>
              <div className='event-rules-box-first'>
                <div className='event-rules-box-first-one'><h3>Event Details</h3></div>
                <p>{event.eventDescription}</p>
              </div>
              <div className='event-rules-box-second'>
                <div className='write-up-header'><h3>Event Rules</h3></div>
                =
                <div className='write-up'>
                  <li className='write-up-title'>No Heckling or Disruptive Behaviour</li>
                  <p className='write-up-text'>{event.eventRule}</p>
                </div>
                
              </div>
            </div>
            <div className='reserve-your-spot'>
              {/* <div className='reserve-your-spot-title'>
                    <div className='reserve-your-spot-title-one' 
                     onClick={() => navigate(`dashboard/ticket-purchace/${eventId}`)}
                     ><p>Reserve your spot</p></div>
                    <span className='favourite-icon'><MdFavoriteBorder /></span>
              </div> */}
              <div className='reserve-your-spot-box-one'>
                <div className='reserve-your-spot-box-one-child'>
                  <div className='reserve-your-spot-box-one-child-first'><h3>Event Agenda</h3></div>
                  <div className='reserve-your-spot-box-one-child-second'>
                    <div className='reserve-your-spot-box-one-child-second-first'><li>6:30 PM – Doors Open & Check-In </li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li>7:00 PM – Welcome & Introduction</li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li>7:15 PM – Opening Act</li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li> 7:45 PM – Main Performance (First Comedian)</li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li> 8:15 PM – Intermission</li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li>8:30 PM – Main Performance (Second Comedian)</li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li>9:00 PM – Headliner Performance</li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li>9:45 PM – Closing Remarks & Thank You</li></div>
                    <div className='reserve-your-spot-box-one-child-second-first'><li>10:00 PM – Event Ends</li></div>
                  </div>
                </div>
              </div>
              <div className='reserve-your-spot-box-two'>
                <div className='reserve-your-spot-box-two-child'>
                <div className='reserve-your-spot-box-two-child-first'><h3>Guest Performers</h3></div>
                <div className='reserve-your-spot-box-two-child-second'>
                  <div className='reserve-your-spot-box-two-child-second-one'><li>Comedian Gutter mouth </li></div>
                  <div className='reserve-your-spot-box-two-child-second-one'><li>Comedian Funnymouth</li></div>
                  <div className='reserve-your-spot-box-two-child-second-one'><li>Mc Savio</li></div>
                </div>
                </div>
              </div>
              <div className='reserve-your-spot-box-three'>
                <div className='reserve-your-spot-box-three-child'>
                  <div className='reserve-your-spot-box-three-child-first'><h3>Available Ticket Types</h3></div>
                  <div className='reserve-your-spot-box-three-child-second'>
                    <div className='regular'>Regular</div>
                    <div className='vip'>Vip</div>
                    <div className='v-vip'>V-Vip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='update-bg'>
          <div className='update-wrapper-one'>
            <div className='update-wrapper-one-first'><h5>Stay in the Loop with SchediTix Updates!</h5></div>
            <div className='update-wrapper-one-second'><p>Get the latest event planning tips, platform updates, exclusive offers, and more, straight to your inbox. Sign up for our newsletter and never miss out on exciting news and features.</p></div>
          </div>
          <div className='update-wrapper-two'>
            <div className='update-wrapper-two-first'>
              <input type="email" placeholder='enter your email address' className='update-wrapper-two-input' />
              <button  type="button"className='update-wrapper-two-btn'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  )
}

export default EventDetails;




