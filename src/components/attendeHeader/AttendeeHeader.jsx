import orangelogo from "../../assets/orangelogo.png";
import "./headerAttendee.css";
// import CircleImg from "../../assets/Frame 129.png";
import { useNavigate } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import {  Drawer } from 'antd';
import { useState } from "react";
import logoicon from "../../assets/logo (1).png"
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";


const AttendeeHeader = () => {
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(true)
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
         <p className="arrow-bacz" onClick={() => navigate(-1)}>
                        <IoIosArrowBack />
                 
                      </p>
                      <p className="arrow-bacz" onClick={() => navigate(+1)}>
                        
                        <IoIosArrowForward />
                      </p>
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
        
            <FiAlignRight className="burger-icon" onClick={showDrawer}/>
            
      </div>
      
      <Drawer title={
    <img src={logoicon} alt="Logo" style={{ height: "30px", width:"69%", marginLeft:"20px", marginTop:"20px" }} onClick={()=>navigate("/")} />
  } onClose={onClose} open={open} style={{width:"70%"}}
      placement="left"
      onClick={onClose}
      ><div className="nav-m-bg">
        <p className="nav-m" onClick={()=>navigate("/dashboard/upcoming-events")}>Upcoming Event</p>
        <p className="nav-m" onClick={()=>navigate("/dashboard/past-events")}>Past Event</p>
        <p className="nav-m"onClick={()=>navigate("/dashboard/event-favorite")}>Event favorite</p>
        <p className="nav-m"onClick={()=>navigate("/dashboard/profile")}>Settings</p>
        <p className="nav-p"onClick={()=>navigate("/dashboard/logout")}>Logout</p>
      </div>
      
      </Drawer>
    
    </div>
  );
};

export default AttendeeHeader;
