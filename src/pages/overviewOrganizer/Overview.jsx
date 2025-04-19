import "../overviewOrganizer/overview.css";
import { FaTicketAlt, FaUsers, FaCheck, FaPlus, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import Calender from "../../assets/calendar.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Overview() {
  const navigate = useNavigate()

  const BASEURL = "https://scheditix.onrender.com"

  const [overview, setOverview] = useState([])
const token = localStorage.getItem(`userToken`)
console.log(token)
  // const header = {
  //   Authorization: 
  // }
  const handleOverview = async () => {
    try {
      const res = await axios.get(`${BASEURL}/api/v1/recent/events`,{
        headers: {
          Authorization: `Bearer, ${token}`
        }
      })
      console.log(res)
      setOverview(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleOverview()
  },[])
  return (
    <div className="dashboard-container">
      <div className="stats-grid">
        <div className="stats-card">
          <div className="stats-content">
            <div className="stats-icon-container">
              <div className="icon-wrapper purple">
                <FaTicketAlt className="icon" />
              </div>
              <p className="stats-label">Total Ticket Sales</p>
            </div>
            <div className="stats-value">300</div>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-content">
            <div className="stats-icon-container">
              <div className="icon-wrapper orange">
                <FaDollarSign className="icon" />
              </div>
              <p className="stats-label">Total Revenue</p>
            </div>
            <div className="stats-value">#3,800,000</div>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-content">
            <div className="stats-icon-container">
              <div className="icon-wrapper purple">
                <FaUsers className="icon" />
              </div>
              <p className="stats-label">Total Events Organized</p>
            </div>
            <div className="stats-value">25</div>
          </div>
        </div>
      </div>

      <div className="info-grid">
        <div className="tips-card">
          <div className="tips-content">
            <h3 className="section-title">Tips to start creating events</h3>
            <p className="section-description">
              Whether it's a concert, conference, or party, setting up your event is quick and hassle free
            </p>

            <div className="checklist">
              <div className="checklist-item">
                <FaCheck className="check-icon" />
                <p className="checklist-text">Add your event name, date, time, agenda location, etc.</p>
              </div>
              <div className="checklist-item">
                <FaCheck className="check-icon" />
                <p className="checklist-text">Add eye catching images & videos to hype your event</p>
              </div>
              <div className="checklist-item">
                <FaCheck className="check-icon" />
                <p className="checklist-text">Create tickets - Set ticket types, prices & availability</p>
              </div>
              <div className="checklist-item">
                <FaCheck className="check-icon" />
                <p className="checklist-text">Share your event, track sales & watch the crowd roll in</p>
              </div>
            </div>

            <div className="calendar-container">
              <img src={Calender} className="eventimage" />
            </div>
          </div>
        </div>

        <div className="create-card">
          <div className="create-content">
            <h3 className="section-title">Turn your event into reality</h3>
            <p className="section-description">
              Ready to host an unforgettable event? Set up your event in minutes
            </p>
            <div className="button-container">
              <button className="create-button" onClick={() => navigate("/dashboard/create-event")}>
                <FaPlus className="button-icon" />
                Create an event
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="events-section">
        <h3 className="events-title">Recent Events</h3>
        <div className="table-container">
          <table className="events-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Tickets Sold</th>
                <th>Total Attendees</th>
                <th>Revenue Generated</th>
                <th>Check-ins</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
           {
            overview.map((i) => (
              <tr>
              <td>{i.eventName}</td>
              <td>{i.ticketSold}</td>
              <td>{i.totalAttendee}</td>
              <td>#{i.revenueGenerated}</td>
              <td>{i.checkins}</td>
              <td><div className="status-container"><div className="status-dot upcoming"></div>{i.status}</div></td>
            </tr>
            ))
           }
              {/* <tr>
                <td>Aegunie City Youth Marathon</td>
                <td>500/550</td>
                <td>500</td>
                <td className="free-text">FREE</td>
                <td>0</td>
                <td><div className="status-container"><div className="status-dot upcoming"></div>Upcoming</div></td>
              </tr>
              <tr>
                <td>AJ Wine & Dine Gala</td>
                <td>300/300</td>
                <td>295</td>
                <td>#1,850,000</td>
                <td>295</td>
                <td><div className="status-container"><div className="status-dot ongoing"></div>Ongoing</div></td>
              </tr>
              <tr>
                <td>Mytastixlive Live in AJ</td>
                <td>412/425</td>
                <td>400</td>
                <td>#18,535,000</td>
                <td>400</td>
                <td><div className="status-container"><div className="status-dot completed"></div>Completed</div></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Overview;
