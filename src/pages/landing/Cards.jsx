import { useNavigate } from "react-router-dom";
import "./cards.css"
import { IoLocationSharp } from "react-icons/io5";

const Cards = (props) => {
    const navigte = useNavigate();
  return (
    <div className='CardsBox'>
        <div className="CardBoxImgBox">
            <img src={props.img} className="CardBoxImg" alt="" />
        </div>
        <div className="CardsBoxTextBox">
            <div className="CardsBoxTextBoxNav1">
                <h3>{props.text1}</h3>
            </div>
            <div className="CardsBoxTextBoxNav2">
                <h3>{props.Date}</h3>
            </div>
        </div>

        <div className="CardsBoxContent">
            <p>{props.content}</p>
        </div>

        <div className="CardsBoxLocation">
        <IoLocationSharp /> <p>{props.Location}</p>
        </div>

        <div className="CardBoxTicket">
            <p>#{props.Price}</p>
            <button className="TicketBtn" onClick={() => navigte("/dashboard/upcoming-event-details")}>Buy Ticket</button>
        </div>
    </div>
  )
}

export default Cards