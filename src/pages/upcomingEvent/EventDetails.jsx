import React from 'react'
import "./upcoming.css"




const EventDetails = () => {
  return (
    <div className='exentDetails'>
        <section className='detailsText'>
            <h1>Event Details</h1>
            <p className='detailsTextP'>
                The Biggest #comedy show to hit the # city of <br />
                #ajegunle Don't miss out!!! #laughter #myKealwisebr <br />
                #premium.
            </p>
            <h1>Event Rules</h1>
            <div className='rulesDiv'>
                <article className='rulesText'>
                    <p><b>.</b></p>
                    <p>No Heckiling or Disrptive Behavior <br />
                    <span className='paragraph'>please be respectful to the performers and fellow</span><br />
                    audience members. Heckling or disrupive behaviour <br />
                    not be toloretd and may resut in removal from the event.
                    </p>
                </article>
                
                <article className='rulesText'>
                    <p><b>.</b></p>
                    <p>Security Check <br />
                    <span className='paragraph'>To ensure the safety of everyone, all attendees may be</span><br />
                    subject to a security check upon entry. Please cooperate <br />
                    with security staff as necessary.
                    </p>
                </article>

                     
                <article className='rulesText'>
                    <p><b>.</b></p>
                    <p>Cell Phones and Recording <br />
                    <span className='paragraph'>For the comfort of everyone, please keep your cell </span><br />
                    phones on silent during the performance. Recording of  <br />
                    the show is prohibited unless explicitly stated by the <br />
                    event organizers.
                    </p>
                </article>

                <article className='rulesText'>
                    <p><b>.</b></p>
                    <p>No Outside Food or Drinks <br />
                    <span className='paragraph'> To maintain a safe and enjoyable environment, please </span><br />
                    refrain from bringing outside food or beverages into the <br />
                    venue. Refreshments are available for everyone.
                    </p>
                </article>

                <article className='rulesText'>
                    <p><b>.</b></p>
                    <p>Respect the Venue and Fellow Attendees <br />
                    <span className='paragraph'> Please be considerate of other guests, maintain a  </span><br />
                    friendly atmosphere, and refrain from excessive talking  <br />
                    during the performance.
                    </p>
                </article>

                <article className='rulesText'>
                    <p><b>.</b></p>
                    <p>Respect the Venue and Fellow Attendees <br />
                    <span className='paragraph'> All ticket sales are final. In the case of unforeseen   </span><br />
                    circumstances, please contact event organizers directly  <br />
                    for assistance.
                    </p>
                </article>

                <article className='rulesText'>
                    <p><b>.</b></p>
                    <p>Accessibility <br />
                    <span className='paragraph'>The venue is accessible to all guests. If you have any   </span><br />
                    specific accessibility needs, please inform us in advance   <br />
                    so we can accommodate you.
                    </p>
                </article>
            </div>
        </section>
     
     <section  className='rightDivWrap'>
        <div className='addtoFav' onClick={()=>openModal()}>Add to favorites</div>
        <div className='addtofavDiv'>
          <div className='addtofavDivWrap'>
            <p><b>Event Agenda</b></p>
            <nav className='agenda'>
                <p><b>.</b> 6:30 PM – Doors Open & Check-In</p>
                <p><b>.</b> 7:00 PM – Welcome & Introduction</p>
                <p><b>.</b> 7:15 PM – Opening Act</p>
                <p><b>.</b> 7:45 PM – Main Performance (First Comedian)</p>
                <p><b>.</b> 8:15 PM – Intermission</p>
                <p><b>.</b> 8:30 PM – Main Performance (Second Comedian)</p>
                <p><b>.</b> 9:00 PM – Headliner Performance</p>
                <p><b>.</b> 9:45 PM – Closing Remarks & Thank You</p>
                <p><b>.</b> 10:00 PM – Event Ends</p>
            </nav>
          </div>
        </div>
     
        
        <div className='guestPerformer'>
          <div className='guestPerformerWrap'>
            <p><b>Guest Performers</b></p>
            <nav className='performer'>
                <p><b>. Comedian Gutter mouth</b> </p>
                <p><b>. Comedian Funnymouth</b> </p>
                <p><b>. Mc Savio</b> </p>
            </nav>
          </div>

        </div>
     </section>
    </div>
  )
}

export default EventDetails