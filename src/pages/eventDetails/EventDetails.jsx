import React, { useEffect, useState } from 'react'
import '../../pages/eventDetails/eventDetails.css'
import { CiCalendarDate } from "react-icons/ci";
import { TbClock } from "react-icons/tb";
import { MdLocationOn, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import AddedPopUp from './AddedPopUp';

const EventDetails = () => {
  const navigate = useNavigate();
  // const [toggle, setToggle] = useState(false)
  
  // const handleToggle = () => {
  //   setToggle(true)
  // }

  // useEffect(() =>{
  //     setTimeout(() => {
  //         setToggle(!true)
  //     }, 5000)
  // },[])
  return (
    <div className='eventdetails-bg'>
        {/* <div className="exentDetailsHeader" style={{background: "red", marginTop: "90px", height: "15%"}}>back</div> */}
        {/* {toggle && <AddedPopUp/>} */}

      <div className='eventdetails-wrapper'>
        <div className='eventdetails-sections'>
          <div className='eventdetails-sections-one'><h4>Shows</h4></div>
          <div className='eventdetails-sections-two'><h3>-</h3></div>
          <div className='eventdetails-sections-three'><h4>Comedy</h4></div>
          <div className='eventdetails-sections-four'><h3>-</h3></div>
          <div className='eventdetails-sections-five'><h4>Mykealwise live</h4></div>
        </div>
        <div className='eventdetails-billboard-bg'>
          <div className='eventdetails-billboard-wrapper'>
            <div className='eventdetails-billboard-image'></div>
            <div className='eventdetails-billboard-text'>
              <div className='eventdetails-billboard-text-one'>
                <h1 className='text-title'>MyKealwise Live in Aj City</h1>
              </div>
              <div className='eventdetails-billboard-text-two'>
                <p className='icon'><CiCalendarDate /></p>
                <h3 className='text-calendar'>26th August 2025</h3>
              </div>
              <div className='eventdetails-billboard-text-three'>
                <p className='icon'><TbClock /></p>
                <h3 className='text-time'>6pm WAT</h3>
              </div>
              <div className='eventdetails-billboard-text-four'>
                <p className='icon'><MdLocationOn /></p>
                <h3 className='text-address'>Abayomi Multipurpose Hall, Ajegunle, Lagos, Nigeria.</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='details-bg'>
          <div className='details-wrapper'>
            <div className='event-rules-box'>
              <div className='event-rules-box-first'>
                <div className='event-rules-box-first-one'><h3>Event Details</h3></div>
                <p>The biggest #comedy Show ever to hit the #city of #ajegunle. Don't miss out! #laughter #mykealwise #premium.</p>
              </div>
              <div className='event-rules-box-second'>
                <div className='write-up-header'><h3>Event Rules</h3></div>

                <div className='write-up'>
                  <li className='write-up-title'>No Heckling or Disruptive Behaviour</li>
                  <p className='write-up-text'>Please be respectful to the performer and fellow audience members. Heckling or disruptive behaviour will not be tolerated.</p>
                </div>
                
                <div className='write-up'>
                  <li className='write-up-title'>Security Check</li>
                  <p className='write-up-text'>All attendees may be subject to a security check upon entry. Please cooperate with security staff.</p>
                </div>

                <div className='write-up'>
                  <li className='write-up-title'>Cell Phones and Recording</li>
                  <p className='write-up-text'>Keep your cell phones on silent during the performance. Recording is prohibited unless permitted by organizers.</p>
                </div>

                <div className='write-up'>
                  <li className='write-up-title'>No Outside Food or Drinks</li>
                  <p className='write-up-text'>To maintain a safe environment, do not bring outside food or drinks. Refreshments are available inside.</p>
                </div>

                <div className='write-up'>
                  <li className='write-up-title'>Respect the Venue and Fellow Attendees</li>
                  <p className='write-up-text'>Be considerate, maintain a friendly atmosphere, and keep conversations minimal during performances.</p>
                </div>

                <div className='write-up'>
                  <li className='write-up-title'>No Refunds or Exchanges</li>
                  <p className='write-up-text'>All ticket sales are final. Contact event organizers for any assistance regarding unforeseen circumstances.</p>
                </div>

                <div className='write-up'>
                  <li className='write-up-title'>Accessibility</li>
                  <p className='write-up-text'>The venue is accessible to all guests. If you have specific accessibility needs, please inform us in advance.</p>
                </div>

              </div>
            </div>
            <div className='reserve-your-spot'>
              <div className='reserve-your-spot-title'>
                    <div className='reserve-your-spot-title-one' 
                     onClick={() => navigate("/login")}
                     ><h4>Reserve your spot</h4></div>
                    <span className='favourite-icon'><MdFavoriteBorder /></span>
              </div>
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




