import orangelogo from "../../assets/orangelogo.png";
import "./headerAttendee.css";
import CircleImg from "../../assets/Frame 129.png";
import { useNavigate } from "react-router-dom";

const AttendeHeader = () => {
  const navigate = useNavigate()
  const input = JSON.parse(localStorage.getItem(`userData`))
// console.log(input)
const token = localStorage.getItem(`userToke`)
  return (
    <div className="headerAttende">
      <div className="headerAttendeImgBox" onClick={() => navigate("/")}>
        <img className="headerAttendeImg" src={orangelogo} alt="" />
      </div>
      <div className="HeaderBox">
        <h2 className="headerAttendeh2">Welcome, {input.fullname}</h2>
        <div className="headerAttendeProfile">
          <div className="headerAttendeProfileCircle">
            <h4 className="headerAttendeProfileCircleImg">
            {input.fullname.charAt(0).toUpperCase()}
            </h4>
            {/* <img
              className="headerAttendeProfileCircleImg"
              // src={CircleImg}
              alt=""
            /> */}

          </div>
          <p>{input.fullname}</p>
        </div>
      </div>
    </div>
  );
};

export default AttendeHeader;
