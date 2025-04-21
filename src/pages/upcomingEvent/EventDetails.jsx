// import "./upcoming.css"

import { useEffect, useState } from "react";
import AddedPopUp from "./AddedPopUp";
import { useParams } from "react-router-dom";
// import axios from "axios";

const EventDetails = ({eventDetails}) => {
    const [toggle, setToggle] = useState(false);

//   const handleToggle = () => {
//        setToggle(true) 
//   };

    useEffect(() => {
      setTimeout(() => {
        setToggle(!true);
      }, 3000);
    }, [toggle]);

 
      const handleAddToFavorite = () => {
        const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      
        const isAlreadyAdded = existingFavorites.some(fav => fav._id === eventDetails._id);
      
        if (!isAlreadyAdded) {
          existingFavorites.push(eventDetails);
          localStorage.setItem("favorites", JSON.stringify(existingFavorites));
          setToggle(true);  
        } else {
          alert("Already added to favorites");
        }
      };
      
      
    

  return (
    <div className="exentDetails">
      <section className="detailsText">
        {toggle && <AddedPopUp />}
        <h1>Event Details</h1>
        <p className="detailsTextP">
            <p>{eventDetails?.eventDescription}</p>
          {/* The Biggest #comedy show to hit the # city of <br />
          #ajegunle Don't miss out!!! #laughter #myKealwisebr <br />
          #premium. */}
        </p>
        <h1>Event Rules</h1>
        <div className="rulesDiv">
          <article className="rulesText">
            <p>{eventDetails?.eventRule}</p>
            {/* <p> */}
              {/* <b>.</b>
            </p>
            <p>
              No Heckiling or Disrptive Behavior <br />
              <span className="paragraph">
                please be respectful to the performers and fellow
              </span>
              <br />
              audience members. Heckling or disrupive behaviour <br />
              not be toloretd and may resut in removal from the event.
            </p> */}
          </article>

 
        </div>
      </section>

      <section className="rightDivWrap">
        <div className="addtoFav" onClick={handleAddToFavorite}>
          Add to favorites
        </div>
        <div className="addtofavDiv">
          <div className="addtofavDivWrap">
            <p>
              <b>Event Agenda</b>
            </p>
            <nav className="agenda">
              {eventDetails.eventAgenda}
              <p>
                <b>.</b> 6:30 PM – Doors Open & Check-In
              </p>
              <p>
                <b>.</b> 7:00 PM – Welcome & Introduction
              </p>
              <p>
                <b>.</b> 7:15 PM – Opening Act
              </p>
            
              <p>
                <b>.</b> 8:15 PM – Intermission
              </p>
             
              <p>
                <b>.</b> 9:00 PM – Headliner Performance
              </p>
              <p>
                <b>.</b> 9:45 PM – Closing Remarks & Thank You
              </p>
              <p>
                <b>.</b> 10:00 PM – Event Ends
              </p>
            </nav>
          </div>
        </div>

        <div className="guestPerformer">
          <div className="guestPerformerWrap">
            <p>
              <b>Guest Performers</b>
            </p>
            <nav className="performer">
              <p>
                <b>. Comedian Gutter mouth</b>{" "}
              </p>
              <p>
                <b>. Comedian Funnymouth</b>{" "}
              </p>
              <p>
                <b>. Mc Savio</b>{" "}
              </p>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
