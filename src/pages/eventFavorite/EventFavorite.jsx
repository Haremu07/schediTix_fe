import { useNavigate } from "react-router-dom";
import "./eventFavorite.css"
import { IoLocationSharp } from "react-icons/io5";

const EventFavorite = () => {
    const navigate = useNavigate()

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(favorites)
    return (
    <div className="Card">
        {
            favorites.length === 0 ? (
                <p>no favorite Event</p>
            ) :(
          favorites.map((event, index) => (
            <div className='CardsBox2' key={index}>
            <div className="CardBoxImgBox2">
                <img src={event?.image?.imageUrl} className="CardBoxImg2" alt="" />
            </div>
            <div className="CardsBoxTextBox2">
                <div className="CardsBoxTextBoxNav12">
                    <h3>{event?.eventTitle}</h3>
                </div>
                <div className="CardsBoxTextBoxNav22">
                    <h3>{event?.startDate}</h3>
                </div>
            </div>
    
            <div className="CardsBoxContent2">
                <p> {event.eventDescription}</p>
            </div>
    
            <div className="CardsBoxLocation2">
            <IoLocationSharp /> <p>{event?.eventLocation}</p>
            </div>
    
            <div className="CardBoxTicket2">
                <p>#{event.ticketPrice}</p>
                <button className="TicketBtn2" onClick={() => navigate("/dashboard/purchase-details/:eventId")}>Buy Ticket</button>
            </div>
        </div>
          )) 
            )
        }
     
       </div>
  )
}

export default EventFavorite
