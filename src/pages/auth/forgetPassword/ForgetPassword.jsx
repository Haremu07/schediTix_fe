import "./forgetPassword.css"
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import orangeLogo from "../../../assets/orangelogo.png"

const ForgetPassword = () => {
  const navigate = useNavigate()
  return (
    <div className="ForgetPassword-container">
      <div className="Nav">
      <div className="signIn-Nav-Header">
          <div className="LogoBox">
          <img  className="Logo" src={orangeLogo}alt="" onClick={() => navigate("/")} />
          </div>
          <div className="signIn-Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
        </div>
      </div>
      <div className="ForgetPassword-body">
        <div className="ForgetPassword-form">
          <div className="ForgetPassword-form-Header">
        {/* <span className="Back" onClick={() => navigate("/login")}><FaArrowLeft/><p>go back</p></span> */}
          <h2 >Forgot your password?</h2>
          </div>
          <form className="form">
            <p className="Passage">We got your request to reset your password. 
              No worries, Just enter your email address below 
              to create a new password and get back to planning 
              your amazing events.</p>
          <span className="input" >
            <MdEmail/>
            <input type="email" className="input2"  placeholder="enther your email" />
          </span>
            <button type="submit" className="btn" onClick={()=> navigate("/login")}>Continue</button>
          </form>
        </div>
      </div>
      <div className="Nav2">
      <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword