import React from 'react'
import '../favorite/favorite.css'
import { BsArrowRight } from "react-icons/bs";

const Favorites = () => {
  return (
    <div className='favourite-bg'>
      <div className='favorite-wrapper'>
      <div className='favorite-event-title'>
        <div className='event-title'><h3>Favorite Events</h3></div>
      </div>
      <div className='favorite-event-wirte-up-wrapper'>
        <div className='favorite-event-wirte-up-box'>
          <div className='favorite-event-wirte-up-one'>
            <div className='favorite-event-wirte-up-one-first'><h3>Kora Hack 2.0 - Redesigni...</h3></div>
            <div className='favorite-event-wirte-up-one-second'><p>A 14-day hackathon to build ideas that are breaking boundaries in how we pay, buy, and sell in emerging markets. KoraHACK 2.0 is sponsored by Kora, a pan-African payment gateway.</p></div>
            <div className='favorite-event-wirte-up-one-third'>
              <h6>See more</h6>
              <span className='arrow-icon' ><BsArrowRight /></span>
            </div>
          </div>
          <div className='favorite-event-wirte-up-one-image'></div>
        </div>
        <div className='favorite-event-wirte-up-box'>
        <div className='favorite-event-wirte-up-two'>
            <div className='favorite-event-wirte-up-two-first'><h3>Genz Tech Fest 2024</h3></div>
            <div className='favorite-event-wirte-up-two-second'><p>We are GenZtechies, where Gen-z developers, founders, designers, and techies can connect, learn, and discover life-changing opportunities.</p></div>
            <div className='favorite-event-wirte-up-two-third'>
              <h6>See more</h6>
              <span className='arrow-icon' ><BsArrowRight /></span>
            </div>
          </div>
          <div className='favorite-event-wirte-up-two-image'> </div>
        </div>
      </div>

      </div>
     
    </div>
  )
}

export default Favorites






