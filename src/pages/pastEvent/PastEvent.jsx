import "./pastEvent.css"
// import image1 from "../../assets/Frame 237815 (1).png"
// import image2 from "../../assets/Frame 237815 (2).png"
// import image3 from "../../assets/Frame 237815 (3).png"
import { useEffect, useState } from "react"
import axios from "axios"

const PastEvent = () => {
      const [allPastEvent, setAllPastEvent] = useState([])
        const BASEURL = "https://scheditix.onrender.com";

        const token = localStorage.getItem(`userToken`);
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        useEffect(() => {
          const handleAllEvent = async () => {
            try {
              const response = await axios.get(`${BASEURL}/api/v1/user/events/past`, {headers});
              setAllPastEvent(response?.data?.data);
            } catch (error) {
              console.log(" Error fetching pasts events:", error);
            }
          };
        
          handleAllEvent();
        }, []);
      
  
  
        // const pastEvents = setAllEvent?.filter(e => e.status === "past");
  
  return (
    <div className="tickets-container">
      <h1 className="tickets-title">Past Events</h1>

      <div className="tickets-list">
        { allPastEvent.length === 0 ? ("No past events!!") : (
           allPastEvent.map((ticket, index) => (
            <div className="ticket-card" key={index}>
              <div className="ticket-image">
                <img src={ticket?.image?.imageUrl} alt={ticket.title} />
              </div>
              <div className="ticket-details">
                <h2>{ticket?.eventTitle}</h2>
                <p className="venue">{ticket?.eventLocation}</p>
                <p className="datetime">{ticket?.startDate} | {ticket.startTime}</p>
                <div className="ticket-footer">
                  <div>
                    <p>{ticket.seatNumber} | {ticket.tableNumber}</p>
                    <p className="label">Table/Seat Number</p>
                  </div>
                  {/* <div className="checkInCode-info">
                    <p className="checkInCode">{ticket.checkInCode}</p>
                    <p className="check-in">Check in code</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))
        )
       }
      </div>
    </div>
  )
}

export default PastEvent
