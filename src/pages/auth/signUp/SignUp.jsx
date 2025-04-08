import "./signUp.css"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { GiDialPadlock } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import {  useNavigate } from "react-router";
import orangeLogo from "../../../assets/orangelogo.png"



const SignIn = () => {
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
             <span className="Back" onClick={() => navigate("/")}><FaArrowLeft/><p>go back</p></span>
          <div className="sigin-form-Header">
          <h2 >Unlock Your Event Access</h2>
          </div>
          <form className="form">
         <span className="input">
          <FaUser/>
           <input type="text" className="input2" placeholder="enther your fullname"/>
          </span> 
          <span className="input" >
            <MdEmail/>
            <input type="email" className="input2"  placeholder="enther your email" />
          </span>
          <span className="input">
            <IoMdCall/>
           <input type="number" className="input2" placeholder="enther your phonenumber"/>
          </span>
          <span className="input">
            <GiDialPadlock/>
           <input type="password" className="input2" placeholder="enther your password"/>
          </span>
          <span className="checkbox"><input type="checkbox" /> <h4>I agree to the terms & conditions and privacy policy</h4></span>
            <button type="submit" className="btn">Sign Up</button>
            <span className="signinBox"><h5>Already have an account? 
              <span className="box" onClick={()=> navigate("/login")}>sign In</span></h5>
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