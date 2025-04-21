// import "./upcoming.css"
import { useEffect, useState } from "react"
import image1 from "../../assets/Frame 237815 (1).png"
import image2 from "../../assets/Frame 237815 (2).png"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const UpcomingEvent = () => {
  const navigate = useNavigate()
  
    const [allEvent, setAllEvent] = useState([])
      const BASEURL = "https://scheditix.onrender.com";
    
      useEffect(() => {
        const handleAllEvent = async () => {
          try {
            const response = await axios.get(`${BASEURL}/api/v1/events`);
            const events = response?.data?.data || [];
            console.log(" All events from API:", events);  
            setAllEvent(events);
          } catch (error) {
            console.log(" Error fetching events:", error);
          }
        };
      
        handleAllEvent();
      }, []);
    
      console.log("allEvent state:", allEvent);


      const upcomingEvents = allEvent?.filter(e => e.status === "upcoming");

       
  return (
    <div className="tickets-container">
      <h1 className="tickets-title">Upcoming Events</h1>

      <div className="tickets-list">
        
   {
      allEvent?.filter(e => e.status === "upcoming").length === 0  ? ("No upcoming")   : (
        upcomingEvents?.map((ticket, index) => (
          <div className="ticket-card" key={index} onClick={() => navigate(`/dashboard/upcoming-event-details/${ticket._id}`)}>

            <div className="ticket-image">
              <img src={ticket?.image.imageUrl || image1} alt={ticket.title || "event"} />
            </div>
            <div className="ticket-details">
              <h2>{ticket?.eventTitle}</h2>
              <p className="venue">{ticket.eventLocation}</p>
              <p className="datetime">{ticket.startDate} | {ticket.startTime}</p>
              {/* <div className="ticket-footer">
                <div>
                  <p>{ticket.seat}</p>
                  <p className="label">Ticket/Seat Number</p>
                </div>
                <div className="checkInCode-info">
                  <p className="checkInCode">{ticket.checkInCode}</p>
                  <p className="check-in">Check in code</p>
                </div>
              </div> */}
            </div>
          </div>
        ))
      ) 
   }
     
      </div>
    </div>
  )
}

export default UpcomingEvent

