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
        <ImLocation size={20} className="LocationIcon"/>
        <input type="text" className="AddEventInput" placeholder="eg Heko Hotel, Lagos/Zoom Link" />
        <div className="AddEventDatesNav">
        <div className="AddEventDatesNavs">
        <div className="texts">
        <h2>Add event start date & time</h2>
        <p>select event start date & time</p>
        </div>
            <div className="AddDateInputBox">
              <FaCalendarAlt className="CalenderIcon"/>  <div className="AddDate" ><p >Select start date</p></div>
               <GoClockFill className="ClockIcon"/> <div className="AddDate"><p>Select start time</p></div>
            </div>
        </div>
        <div className="AddEventDatesNavs">
        <div className="texts">
        <h2>Add event end date & time</h2>
        <p>select event end date & time</p>
        </div>
            <div className="AddDateInputBox">
              <FaCalendarAlt className="CalenderIcon2"/>  <div className="AddDate" ><p>Select start time</p></div>
               <GoClockFill className="ClockIcon2"/> <div className="AddDate"><p>Select end time</p></div>
            </div>
        </div>
        </div>
        <button className="Updatebtn">Update</button>
      </div>
      
    </div>
  );
};

export default EditEvent;
