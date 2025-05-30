import "./ticketPurchased.css"
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BsFillClockFill } from "react-icons/bs";
import UpcomingEventImage from "../../assets/upcmingEventImage.jpg"
import { IoIosArrowBack } from "react-icons/io";
import '../../pages/eventDetails/eventDetails.css'
// import { CiCalendarDate } from "react-icons/ci";
// import { TbClock } from "react-icons/tb";
import {  MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const TicketPurchaced = () => {
    const navigate = useNavigate()
  return (
    <div className="upcoming-event">
        <div className="upcoming-evenr-header">
            <h5 onClick={() => navigate("/dashboard/event-favorite")}><IoIosArrowBack size={25}/> back</h5>
        </div>
      <div className='upimgDiv'>
        <section className='upImgDiv'>
        <img src={UpcomingEventImage} alt="" />
        </section>
        
        <section className='upTextDiv'>
          <h2>MyKealwise Live in Aj City</h2>
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
 
          <div className='eventdetails-bg'>
            <div className='eventdetails-wrapper'>
              <div className='details-bg'>
                <div className='details-wrapper'>
                  <div className='event-rules-box'>
                    <div className='event-rules-box-first'>
                      <div className='event-rules-box-first-one'><h3>Event Title</h3></div>
                      <p>Mykealwise live in lagos</p>
                    </div>
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
                           onClick={() => navigate("/dashboard/purchase-details")}
                           ><h4>Buy Ticket</h4></div>
                          {/* <span className='favourite-icon'><MdFavoriteBorder /></span> */}
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
                   
                  </div>
                </div>
              </div>
            
            </div>
          </div>
      

    </div>
  )
}

export default TicketPurchaced



 