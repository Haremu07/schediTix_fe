import React from 'react';
import { Outlet } from 'react-router';
import "./attendee.css";
import AttendeHeader from "../../components/attendeHeader/AttendeHeader";
import EventPlannerSideNav from './EventPlannerSideNav';

const EventplannerDashboard = () => {
  return (
    <div className='EventplannerDashboard'>
      <AttendeHeader />
      <div className='EventplannerDashboardNav'>
        <EventPlannerSideNav />
        <div className='outlet-container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EventplannerDashboard;