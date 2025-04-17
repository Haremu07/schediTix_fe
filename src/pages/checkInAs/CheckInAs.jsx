import orangelogo from "../../assets/orangelogo.png";
import "./checkInAs.css";
import logo1 from "../../assets/time management.png";
import logo2 from "../../assets/time management44.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckInAs = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem(`userData`));
  // const token = localStorage.getItem(`userToken`)
  // console.log(token)
  console.log(userData);
  return (
    <div className="CheckInAsBody">
      <div className="CheckInAsHeader">
        <img
          className="CheckInAsHeaderImg"
          src={orangelogo}
          alt=""
          onClick={() => navigate("/")}
        />
      </div>
      <div className="CheckInAsText">
        <h2>Welcome {userData ? userData.fullname : "Guest"}</h2>
        <p>what do you want to do today?</p>
      </div>
      <div className="CheckInAsBox">
        <div
          className="CheckInAsBoxs"
          onClick={() => {
            if (userData && localStorage.getItem("userToken")) {
              navigate("/dashboard/overview");
            } else {
              toast.error("User not found");
              navigate("/login")
            }
          }}
        >
          <div className="ImgBox">
            <img className="Img" src={logo1} alt="" />
          </div>
          <h2>Organize an event</h2>
        </div>
        <div
          className="CheckInAsBoxs"
          onClick={() =>{
            if (userData && localStorage.getItem("userToken")) {
              navigate("/dashboard/upcoming-event");
            } else {
              navigate("/login")
              toast.error("User not found");
            }
          }}
        >
          <div className="ImgBox">
            <img className="Img" src={logo2} alt="" />
          </div>
          <h2>Attend an event</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckInAs;
