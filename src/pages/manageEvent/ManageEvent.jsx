import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../manageEvent/manageEvent.css'
import axios from 'axios';

const ManageEvent = () => {
  const navigate = useNavigate()
  const [toggle, setToggle]= useState(false)
      const[count, setCount] = useState(0)
      const[active, setActive] = useState(0)

      
      
  return (
    <div className='upcoming-bg'>
      <div className='upcoming-headerss'>
        <div
          style={{ color: active === 0 ? "rgb(27, 26, 26)" : "" }}
          className={`upcoming-headers-title-one ${active === 0 ? "the-border-bottom" : ""}`}
          onClick={() => setActive(0)}
        >
          <h3>All events</h3>
        </div>
        <div
          style={{ color: active === 1 ? "rgb(27, 26, 26)" : "" }}
          className={`upcoming-headers-title-two ${active === 1 ? "the-border-bottom" : ""}`}
          onClick={() => setActive(1)}
        >
          <h3>Upcoming events</h3>
        </div>
        <div
          style={{ color: active === 2 ? "rgb(27, 26, 26)" : "" }}
          className={`upcoming-headers-title-three ${active === 2 ? "the-border-bottom" : ""}`}
          onClick={() => setActive(2)}
        >
          <h3>Ongoing events</h3>
        </div>
        <div
          style={{ color: active === 3 ? "rgb(27, 26, 26)" : "" }}
          className={`upcoming-headers-title-four ${active === 3 ? "the-border-bottom" : ""}`}
          onClick={() => setActive(3)}
        >
          <h3>Ended events</h3>
        </div>
        <div>
          <input
            type="text"
            placeholder='Search for your events'
            className='upcoming-headers-input'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Event Table */}
      <div className='upcoming-wrapper'>
        <div className='upcoming-header'>
          <div className='upcoming-header-one'><div><p>Media / Title</p></div></div>
          <div className='upcoming-header-two'>
            <div className='upcoming-header-two-child'>
              <p>Date & Time</p>
              <p>Tickets(sold)</p>
              <p>Revenue</p>
              <p>Status</p>
            </div>
          </div>
          <div className='upcoming-header-three'><div><p>Actions</p></div></div>
        </div>

        {currentEvents.length > 0 ? (
          currentEvents.map(event => (
            <EventRow key={event._id} event={event} />
          ))
        ) : (
          <div className='no-events-message'>
            <p>No events found matching your criteria</p>
          </div>
        )}

        {/* Pagination */}
        {filteredEvents.length > eventsPerPage && (
          <div className='pagination-bg'>
            <div className='pagination-wrapper'>
              <p
                className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={prevPage}
              >
                <IoIosArrowBack />
              </p>
              {renderPaginationNumbers()}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <p className='dot'><PiDotsThreeOutlineFill /></p>
              )}
              {totalPages > 5 && currentPage < totalPages - 1 && (
                <div
                  className={`num ${currentPage === totalPages ? 'active-page' : ''}`}
                  onClick={() => paginate(totalPages)}
                >
                  {totalPages}
                </div>
              )}
              <p
                className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={nextPage}
              >
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageEvent
