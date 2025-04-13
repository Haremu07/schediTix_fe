import "./editEvent.css";
import { FaLessThan } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const EditEvent = () => {
const navigate = useNavigate()
  return (
    <div className="EditEvent">
      <div className="EditEventHeader">
        <FaLessThan style={{cursor: "pointer"}} size={25} onClick={() => navigate("/dashboard/manage-event")}/>
        <p className="EditEventHeader">
          <span className="EditEventHeaderSpan">Edit event</span>
          <BsDashLg /> Edit ticket
        </p>
      </div>

      <div className="AddEvent">
        <div className="texts">
        <h2>Add event location</h2>
        <p>Enter the venue or online link</p>
        </div>
        <div className="AddEventInputBox">
        <ImLocation size={20}/>
        <input type="text" className="AddEventInput"  placeholder="eg Heko Hotel, Lagos/Zoom Link" />
        </div>
        <div className="AddEventDatesNav">
        <div className="AddEventDatesNavs">
        <div className="texts">
        <h2>Add event start date & time</h2>
        <p>select event start date & time</p>
        </div>
            <div className="AddDateInputBox">
                <div className="AddDate" >
              <FaCalendarAlt />  <p >Select start date</p>
                </div>
                <div className="AddDate">
               <GoClockFill c/> <p>Select start time</p>
            </div>
            </div>
        </div>
        <div className="AddEventDatesNavs">
        <div className="texts">
        <h2>Add event end date & time</h2>
        <p>select event end date & time</p>
        </div>
            <div className="AddDateInputBox">
            <div className="AddDate">
              <FaCalendarAlt />   
              <p>Select start time</p></div>
              <div className="AddDate">
               <GoClockFill /> 
               <p>Select end time</p></div>
            </div>
        </div>
        </div>
        <button className="Updatebtn">Update</button>
      </div>
      
    </div>
  );
};

export default EditEvent;
