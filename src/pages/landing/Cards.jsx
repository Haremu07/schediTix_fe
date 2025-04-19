import { useNavigate } from "react-router-dom";
import "./cards.css"
import { IoLocationSharp } from "react-icons/io5";

import { useEffect, useState } from "react";

const Cards = ({trending}) => {
    const navigte = useNavigate();
    
  return (
    <div className='CardsBox'>
        <div className="CardBoxImgBox">
            <img src={trending.image[0]?.imageUrl} className="CardBoxImg" alt="" />
        </div>
        <div className="CardsBoxTextBox">
            <div className="CardsBoxTextBoxNav1">
                <h3>{trending?.eventTitle}</h3>
            </div>
            <div className="CardsBoxTextBoxNav2">
                <h3>{}</h3>
            </div>
        </div>

        <div className="CardsBoxContent">
            <p>{trending?.eventDescription}</p>
        </div>

        <div className="CardsBoxLocation">
        <IoLocationSharp /> <p>{trending?.eventLocation}</p>
        </div>

        <div className="CardBoxTicket">
            <p>#{trending?.ticketPrice}</p>
            <button className="TicketBtn" onClick={() => navigte("/dashboard/ticket-purchace")}>Buy Ticket</button>
        </div>
    </div>
  )
}

export default Cards