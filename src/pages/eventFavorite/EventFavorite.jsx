import "./eventFavorite.css"
import { IoLocationSharp } from "react-icons/io5";

const EventFavorite = () => {
  return (
    <div className="Card">
      <div className='CardsBox2'>
           <div className="CardBoxImgBox2">
               <img src="https://www.astro.com/im/in/sr_cosmic_sky.jpg" className="CardBoxImg2" alt="" />
           </div>
           <div className="CardsBoxTextBox2">
               <div className="CardsBoxTextBoxNav12">
                   <h3>CONVERGENCE OF STARS</h3>
               </div>
               <div className="CardsBoxTextBoxNav22">
                   <h3>21st December, 2025</h3>
               </div>
           </div>
   
           <div className="CardsBoxContent2">
               <p>This is the 4th edition of the biggest community awards ceremony in Africa."</p>
           </div>
   
           <div className="CardsBoxLocation2">
           <IoLocationSharp /> <p>Eko Hotel and Suites</p>
           </div>
   
           <div className="CardBoxTicket2">
               <p>#2,000</p>
               <button className="TicketBtn2">Buy Ticket</button>
           </div>
       </div>
       </div>
  )
}

export default EventFavorite
