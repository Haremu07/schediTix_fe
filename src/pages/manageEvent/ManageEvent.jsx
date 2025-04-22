import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../manageEvent/manageEvent.css'
import axios from 'axios';

const ManageEvent = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [eventsPerPage] = useState(5)
  const [searchTerm, setSearchTerm] = useState('')
  const [getTicketUserId, setGetTicketUserId] = useState([])

  const BASE = "https://scheditix.onrender.com";

  const getUserId = () => {
    const userData = localStorage.getItem("userData");
    if (!userData) return null;

    try {
      const parsedUser = JSON.parse(userData);
      return parsedUser._id || null;
    } catch (error) {
      console.error("Failed to parse user data:", error);
      return null;
    }
  };

  const userId = getUserId();

  const getId = async () => {
    try {
      const response = await axios.get(`${BASE}/api/v1/getPlannerEvent/${userId}`)
      setGetTicketUserId(response?.data?.data || [])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getId()
  }, [])

  const filteredEvents = getTicketUserId.filter(event => {
    const matchesSearch = event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
    if (active === 0) return matchesSearch
    if (active === 1) return matchesSearch && event.status === 'upcoming'
    if (active === 2) return matchesSearch && event.status === 'ongoing'
    if (active === 3) return matchesSearch && event.status === 'ended'
    return matchesSearch
  })

  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent)
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1)

  useEffect(() => {
    setCurrentPage(1)
  }, [active, searchTerm])

  const renderPaginationNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`num ${currentPage === i ? 'active-page' : ''}`}
          onClick={() => paginate(i)}
        >
          {i}
        </div>
      )
    }

    return pageNumbers
  }

  const EventRow = ({ event }) => (
    <div className='upcoming-event-info-wrapper'>
      <div className='upcoming-event-info-wrapper-one'>
        <div className='upcoming-event-info-wrapper-one-img'>
          <img src={event?.image?.imageUrl} alt="" className='imagez' />
        </div>
        <p>{event.eventTitle}</p>
      </div>

      <div className='upcoming-event-info-wrapper-two'>
        <p>{event.startDate}</p>
        <p>{event.ticketQuantity}</p>
        <p>{event.revenueGenerated}</p>
        <p className={event.status}>
          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
        </p>
      </div>

      <div className='upcoming-event-info-wrapper-three'>
        <div className='dot-icon' onClick={() => {
          setToggle(!toggle)
          setCount(event._id)
        }}>
          <PiDotsThreeOutlineFill />
        </div>
        {count === event._id && toggle && (
          <div className='boxs'>
            <div className='boxs-one' onClick={() => navigate('/dashboard/create-event')}><h5>Create event</h5></div>
            <div className='boxs-two' onClick={() => navigate('/dashboard/edit-event')}><h5>Edit</h5></div>
            <div className='boxs-three'><h5>Check in</h5></div>
          </div>
        )}
      </div>
    </div>
  )

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
