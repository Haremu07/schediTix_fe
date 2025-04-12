import React from 'react'
import { Outlet } from 'react-router'   
import "./attendee.css"
import AttendeHeader from "../../components/attendeHeader/AttendeHeader"
import AttendeeSideBar from "../sidebar/AttendeeSideBar"


const AttendeDashBorad = () => {
  return (
    <div className='attende-dashboard'>
        <AttendeHeader/>
        <div className='attendeDdashboardContent'>
            <AttendeeSideBar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default AttendeDashBorad