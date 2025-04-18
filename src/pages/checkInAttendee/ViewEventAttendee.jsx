import "./viewEventAttendee.css"
import UpcomingEventImage from "../../assets/upcmingEventImage.jpg"
import { IoIosArrowBack } from "react-icons/io";
import '../../pages/eventDetails/eventDetails.css'
import { useNavigate } from 'react-router-dom';
import { IoCopy } from "react-icons/io5";


const ViewEventAttendee = () => {
    const navigate = useNavigate()
  
  return (
    <div className="view-event">
        <div className="view-event-header">
            <h5 onClick={() => navigate("/dashboard/checkin")}><IoIosArrowBack size={25}/> back</h5>
            <div className="CheckInBox"><input className="CheckInBoxInput" type="text" placeholder="http://scheditix.mykealwiselive/ticket"/>
            <p>Copy event link</p><IoCopy/> </div>
        </div>
      <div className='viewimgDiv'>
        <section className='viewImgDiv'>
        <img src={UpcomingEventImage} alt="" />
        </section>
      </div>
 
          <div className='eventdetails-bg'>
            <div className='eventdetails-wrapper'>
              <div className='details-bg'>
                <div className='details-wrapper'>
                  <div className='event-rules-box'>
                    <div className='event-rules-box-first'>
                        <h3> Title</h3>
                      <div className='event-rules-box-first-one1'>
                        </div>
                      <p>Mykealwise live in lagos.</p>
                    </div>
                    {/* <div className='event-rules-box-first'> */}
                    <h3>Event Details</h3>
                      <div className='event-rules-box-first-one'>
                        <nav className="Nav1">
                            <h4>Location</h4>
                            <p>Zone Park, Egbeda, Lagos.</p>
                        </nav>
                        <nav className="Nav1">
                        <h4>Time</h4>
                        <p>11:00am - 4:00</p>
                        </nav>
                      </div>
                    {/* </div> */}
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

                      <div className='reserve-your-spot-box-twoTables'>
                        <div className='reserve-your-spot-box-two-childTables'>
                        <div className='reserve-your-spot-box-two-child-first'><h3>Tables & Seats</h3></div>
                        <div className='reserve-your-spot-box-two-child-secondTable'>
                          <button className="SEatsTablesBtn">50 tables</button>
                          <button className="SEatsTablesBtn2">500 seats</button>
                        </div>
                        </div>
                      </div>

                      <div className='reserve-your-spot-box-twoTables'>
                        <div className='reserve-your-spot-box-two-childTables'>
                        <div className='reserve-your-spot-box-two-child-first'><h3>Tables & Seats</h3></div>
                        <div className='reserve-your-spot-box-two-child-secondTable'>
                          <button className="SEatsTablesBtn">480 sold</button>
                          <button className="SEatsTablesBtn2">20 unsold</button>
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

export default ViewEventAttendee
