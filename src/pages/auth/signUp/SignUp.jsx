import "./signUp.css"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { GiDialPadlock } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import {  useNavigate } from "react-router";
import orangeLogo from "../../../assets/orangelogo.png"
import { useState } from "react";
import axios from "axios";



const SignIn = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: ""
  })

const handleChange =  (e) => {
  const {name, value} = e.target;
  setInput((prev) => ({...prev, [name]: value})) 
}  

const BASEURL = "https://scheditix.onrender.com"

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${BASEURL}/api/v1/register/user`, input) 
    
  } catch (error) {
    console.log(error)
  }
}
  const navigate = useNavigate();
  return (
    <div className="signin-container">
      <div className="signIn-Nav">
      <div className="signIn-Nav-Header">
          <div className="LogoBox">
          <img  className="Logo" src={orangeLogo} onClick={() => navigate("/")} />
          </div>
          <div className="signIn-Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
        </div>
      </div>
      <div className="signin-body">
        <div className="signin-form">
          <div className="sigin-form-Header">
          <h2 >Unlock Your Event Access</h2>
          </div>
          <form className="form">
         <span className="input">
          <FaUser/>
           <input type="text" name="fullname" value={input.fullname}
           onChange={handleChange} className="input2" 
           placeholder="enter your fullname"/>
          </span> 
          <span className="input" >
            <MdEmail/>
            <input type="email" name="email" value={input.email}
            onChange={handleChange} className="input2" 
             placeholder="enter your email" />
          </span>
          <span className="input">
            <IoMdCall/>
           <input type="number" name="phonenumber" value={input.phonenumber}
           onChange={handleChange} className="input2" 
           placeholder="enter your phonenumber"/>
          </span>
          <span className="input">
            <GiDialPadlock/>
           <input type="password" name="password" value={input.password} 
           onChange={handleChange} className="input2" 
           placeholder="enter your password"/>
          </span>
            <button type="submit" className="btn" onClick={handleSubmit}>Sign Up</button>
            <span className="signinBox"><h5>Already have an account? 
              <div className="box" onClick={()=> navigate("/login")}>sign In</div></h5>
              </span>
          </form>
        </div>
      </div>
      <div className="signIn-Nav2">
      <div className="signIn-Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn