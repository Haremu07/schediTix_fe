import orangelogo from "../../assets/orangelogo.png";
import "./headerAttendee.css";
import CircleImg from "../../assets/Frame 129.png";
import { useNavigate } from "react-router-dom";

const AttendeHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="headerAttende">
      <div className="headerAttendeImgBox" onClick={() => navigate("/")}>
        <img className="headerAttendeImg" src={orangelogo} alt="" />
      </div>
      <div className="HeaderBox">
        <h2 className="headerAttendeh2">Welcome, Cynthia</h2>
        <div className="headerAttendeProfile">
          <div className="headerAttendeProfileCircle">
            <img
              className="headerAttendeProfileCircleImg"
              src={CircleImg}
              alt=""
            />
          </div>
          <p>Cynthia Chidera</p>
        </div>
      </div>
    </div>
  );
};

export default AttendeHeader;
