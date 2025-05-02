import React from 'react'
import { Outlet } from 'react-router'   
import "./attendee.css"
// import AttendeHeader from "../../components/attendeHeader/AttendeHeader"
import AttendeeSideBar from "../sidebar/AttendeeSideBar"
import AttendeeHeader from '../attendeHeader/AttendeeHeader'


const AttendeDashBorad = () => {
  return (
    <div className='attende-dashboard'>
        <AttendeeHeader />
        <div className='attendeDdashboardContent'>
            <AttendeeSideBar/>
            <div className='outlet-cont'>
            <Outlet/>
            </div>
           
        </div>
    </div>
  )
}

export default AttendeDashBorad