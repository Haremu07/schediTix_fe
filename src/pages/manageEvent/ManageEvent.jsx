import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../manageEvent/manageEvent.css'
import ajegunle from '../../assets/Frame 237815 (1).png'
import ay from '../../assets/Frame 237815 (2).png'
import fusion from '../../assets/fusion 236.png'
import party from '../../assets/Frame 237815 (3).png'

// Sample event data
const eventData = [
  { id: 1, image: ajegunle, title: "Laugh with MC with wire-wire 1.0", date: "24/04/2025 - 11:00am", tickets: "350(220)", revenue: "#2,450,000", status: "ongoing" },
  { id: 2, image: ay, title: "Laugh with MC with wire-wire 1.0", date: "24/04/2025 - 11:00am", tickets: "350(220)", revenue: "#2,450,000", status: "upcoming" },
  { id: 3, image: fusion, title: "Laugh with MC with wire-wire 1.0", date: "24/04/2025 - 11:00am", tickets: "350(220)", revenue: "#2,450,000", status: "ongoing" },
  { id: 4, image: party, title: "Laugh with MC with wire-wire 1.0", date: "24/04/2025 - 11:00am", tickets: "350(220)", revenue: "#2,450,000", status: "upcoming" },
  { id: 5, image: ajegunle, title: "Laugh with MC with wire-wire 1.0", date: "24/04/2025 - 11:00am", tickets: "350(220)", revenue: "#2,450,000", status: "ended" },
  { id: 6, image: party, title: "Laugh with MC with wire-wire 1.0", date: "24/04/2025 - 11:00am", tickets: "350(220)", revenue: "#2,450,000", status: "upcoming" },
  { id: 7, image: ay, title: "Laugh with MC with wire-wire 1.0", date: "24/04/2025 - 11:00am", tickets: "350(220)", revenue: "#2,450,000", status: "upcoming" },
];

const ManageEvent = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [eventsPerPage] = useState(5) // Number of events per page
  const [searchTerm, setSearchTerm] = useState('')

  // Filter events based on active tab and search term
  const filteredEvents = eventData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (active === 0) return matchesSearch // All events
    if (active === 1) return matchesSearch && event.status === 'upcoming'
    if (active === 2) return matchesSearch && event.status === 'ongoing'
    if (active === 3) return matchesSearch && event.status === 'ended'
    return matchesSearch
  })

  // Get current events for pagination
  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent)
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [active, searchTerm])

  // Render pagination numbers
  const renderPaginationNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5 // Maximum number of visible page numbers
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    
    // Adjust if we're at the start or end
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

  // Event row component
  const EventRow = ({ event }) => (
    <div className='upcoming-event-info-wrapper'>
      <div className='upcoming-event-info-wrapper-one'>
        <div className='upcoming-event-info-wrapper-one-img'>
          <img src={event.image} alt="" className='imagez' />
        </div>
        <p>{event.title}</p>
      </div>
      <div className='upcoming-event-info-wrapper-two'>
        <p>{event.date}</p>
        <p>{event.tickets}</p>
        <p>{event.revenue}</p>
        <p className={event.status}>{event.status.charAt(0).toUpperCase() + event.status.slice(1)}</p>
      </div>
      <div className='upcoming-event-info-wrapper-three'>
        <div className='dot-icon' onClick={() => {
          setToggle(!toggle)
          setCount(event.id)
        }}>
          <PiDotsThreeOutlineFill />
        </div>
        {count === event.id && toggle && (
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
            <EventRow key={event.id} event={event} />
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