import "./pastEvent.css"
import image1 from "../../assets/Frame 237815 (1).png"
import image2 from "../../assets/Frame 237815 (2).png"
import image3 from "../../assets/Frame 237815 (3).png"

const PastEvent = () => {
  return (
    <div className="tickets-container">
      <h1 className="tickets-title">Tickets Purchased</h1>

      <div className="tickets-list">
        {[
          {
            title: "AJ City Youth Ma...",
            date: "Dec 1, 2025",
            time: "11am prompt",
            seat: "Table3Seat14",
            checkInCode: "RL48",
            image: image1
          },
          {
            title: "Mykealwise live in Ajeg...",
            date: "Oct 4, 2024",
            time: "6pm prompt",
            seat: "Table12Seat19",
            checkInCode: "RL48",
            image: image2
          },
          {
            title: "AJ City Youth Ma...",
            date: "Dec 28, 2025",
            time: "11am prompt",
            seat: "Table3Seat14",
            checkInCode: "RL48",
            image: image3
          }
        ].map((ticket, index) => (
          <div className="ticket-card" key={index}>
            <div className="ticket-image">
              <img src={ticket.image} alt={ticket.title} />
            </div>
            <div className="ticket-details">
              <h2>{ticket.title}</h2>
              <p className="venue">City Hall, Ajegunle, Lagos, Nigeria</p>
              <p className="datetime">{ticket.date} | {ticket.time}</p>
              <div className="ticket-footer">
                <div>
                  <p>{ticket.seat}</p>
                  <p className="label">Ticket/Seat Number</p>
                </div>
                <div className="checkInCode-info">
                  <p className="checkInCode">{ticket.checkInCode}</p>
                  <p className="check-in">Check in code</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PastEvent
