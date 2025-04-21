import axios from "axios";
import "./cards.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
 
import { Toaster, toast } from "react-hot-toast";

const Card2 = (props) => {
  const[featureEvent, setFeatureEvent]= useState([])
     const BASEURL = "https://scheditix.onrender.com"
     const handleFeaturedEvents = async () =>{

      try{
        const response = await axios.get(`${BASEURL}/api/v1/featured-events`)
        if(response?.data?.data.length){
          setFeatureEvent(response?.data?.data)
          // toast.success(response?.data?.message || "Events loaded")
          console.log(response)
        }else{
          console.log("No featured events found.");
        }


       }
       catch(err){
        console.log(err)
        toast.error(err?.data?.message || "Failed to fetch events")
       }
     }
    //  useEffect(() => {
    // ();
    // }, []);
    
     const eventsToDisplay = featureEvent.length ? featureEvent : [{
      title: props.text,
      description: props.content,
      image: props.image
    }];
  
    return (
      <>
        <Toaster />
        {eventsToDisplay.map((event, index) => (
          <div className="Card2" key={index} onClick={handleFeaturedEvents}>
            <div className="Card2Nav">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="SeeM">See more <FaArrowRightLong /></p>
            </div>
            <div className="Card2Nav2">
              <img className="Card2Nav2Img" src={event.image} alt="Event" />
            </div>
          </div>
        ))}
      </>
    );
}

export default Card2