import React from 'react'
import { useNavigate } from 'react-router-dom'

const ManageEvent = () => {
  const navigate = useNavigate()
  return (
    <div>ManageEvent
      <button onClick={() => navigate("/dashboard/edit-event")}>EditEvent</button>
    </div>
  )
}

export default ManageEvent