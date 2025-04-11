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
        <button>add to fave</button>
        <div className='addtofavDiv'>
          <div className='addtofavDivWrap'></div>
        </div>
     </section>
        
    </div>
  )
}

export default EventDetails