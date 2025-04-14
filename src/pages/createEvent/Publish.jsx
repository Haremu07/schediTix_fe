import React, {useState} from 'react'
import '../createEvent/publish.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { Modal } from 'antd';
import { VscVerifiedFilled } from "react-icons/vsc";

const Publish = () => {
    const [isModalOpens, setIsModalOpens] = useState(false);
  const showModals = () => {
    setIsModalOpens(true);
  };

  const timeout = () => {
    setTimeout(() => {
      setIsModalOpens(false);
    }, 2000);
  };
    return (
      <div className='publish-bg'>
          <div className='publish-wrapper'>
              <div className='publish-title'>
                            <div className='publish-holder-nav'>
                            <p className='arrow-back'><IoIosArrowBack /></p>
                            <h3>Create event - <span style={{color:"rgb(255,128,88)"}}>Add ticket</span> </h3>
                              </div>  
              
                          </div>
                          <div className='publish-wrapper-two'>
                        <div className = "publish-wrapper-two-title">
                          <h3>we don't charge for free ticket</h3>
                        </div>
                        <div className='publish-wrapper-two-double-bg'>
                          <div className='publish-wrapper-two-double-div-one'>
                          <div className='publish-first-box'>
                          <div><h3>Ticket Price</h3></div>
                          <div><p>Set the price for this ticket</p></div>
                          <div><input type="number" placeholder='e.g.,550 / #10,000' className='publish-input' min={0}/></div>
                      </div>
                          </div>
                          <div className='publish-wrapper-two-double-div-one'>
                          <div className='publish-first-box'>
                          <div><h3>Ticket Quality</h3></div>
                          <div><p>How many of this ticket are available for sale?</p></div>
                          <div><input type="number" placeholder='e.g.,300' className='publish-input' min={0}/></div>
                      </div>
                          </div>
                        </div>
                        <div className='publish-wrapper-single-double-bg'>
                        <div className='publish-third-box'>
                          <div><h3>Ticket Purchase limit</h3></div>
                          <div><p>Set this ticket purchase limit</p></div>
                          <div><input type="number" placeholder='e.g.,3' className='publish-third-input' min={0}/></div>
                      </div>
                        </div>
                        <div className='quick-reminder-bg'>
                          <div className='quick-reminder-wrapper'>
                            <div className='quick-reminder-title-wrapper'>
                              <p className='warning-icon'><IoWarning /></p>
                              <h2 className='warning-texts'>Quick Reminder:</h2>
                            </div>
                            <div className='quick-reminder-text-wrapper'>
                              <h4 className='quick-reminder-text-wrapper-text'>You're only allowed to make changes to the event date 📆, time ⏱, and location 📍 . <br /> All other event details are locked in once the event goes live. Make sure everything else looks good before publishing !</h4>
                            </div>
                          </div>
                          <Modal open={isModalOpens} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: "none" } }} closable={false}>
                        <div className='success-bg'>
                          <div className='verified-icon-holder'><VscVerifiedFilled className='verified-icon' /></div>
                          <div className='successful-text-holder'>
                            <h3 className='successful-text'>Congratulations on successfully creating an event!!</h3>
                          </div>
                        </div>
                       </Modal>
                          <div className='publish-event-btn-bg'>
                            <button className='publish-event-btn' onClick={() => { timeout(); showModals(); }}>Publish Event</button>
                          </div>
                        </div>
                          </div>
          </div>
        
      </div>
    )
  }
  
  export default Publish
