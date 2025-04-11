import orangelogo from "../../assets/orangelogo.png"
import "./checkInAs.css"
import logo1 from "../../assets/time management.png"
import logo2 from "../../assets/time management44.png"
import { useNavigate } from "react-router-dom"

const CheckInAs = () => {
  const navigate = useNavigate();
  return (
    <div className='CheckInAsBody'>
        <div className="CheckInAsHeader">
          <img className="CheckInAsHeaderImg" src={orangelogo} alt="" onClick={() => navigate("/")}/>
        </div>
        <div className="CheckInAsText" >
          <h1>Welcome Cynthia</h1>
          <p>what do you want to do today?</p>
        </div>
        <div className="CheckInAsBox">
          <div className="CheckInAsBoxs" onClick={() => navigate("/dashboard/overview")}>
            <div className="ImgBox">
              <img className="Img" src={logo1} alt="" />
            </div>
              <h1>Organize an event</h1>
          </div>
          <div className="CheckInAsBoxs" onClick={() => navigate("/dashboard/upcoming-events")}>
            <div className="ImgBox">
          <img className="Img" src={logo2} alt="" />
            </div>
          <h1>Attend an event</h1>
          </div>
        </div>
    </div>
  )
}

export default CheckInAs