import React from 'react'
import "./attendeeSidebar.css"

const AttendeeSideBar = () => {
  return (
    <div className='attendee-sidebar'>
     <p>Upcoming Event</p>
     <p>Past Event</p>
     <p>Event favorite</p>
     <p>Settings</p>
     <p className='logoutAtt'>Logout</p>
      </div>
  )
}

export default AttendeeSideBar