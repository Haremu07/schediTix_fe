
import "./emailVerification.css"
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";


const Verify = () => {
  const navigate = useNavigate()
  return (
    <div className="email-verification-container">
      <div className="Nav">
        <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
      <div className="email-verification-body">
        <div className="email-verification-form">
          <div className="email-verification-form-Header">
          <h2 style={{color: "#5a4e9c"}}>SchediTix</h2>
          <h2>Almost There!</h2>
          </div>
          <form className="form">
            <p className="Passage">We’ve sent a 4-digit code to
               your email. Check your inbox (and maybe your spam
                folder, just in case) and enter the code below
                 to verify your email.</p>
          <div className="inputBox">
            <input type="text" className="inpute"/>
            <input type="text" className="inpute"/>
            <input type="text" className="inpute"/>
            <input type="text" className="inpute"/>
          </div>
            <button type="submit" className="btn" onClick={()=> navigate("/login")}>Sign In</button>
           <div className="CodeBox">
           <p>Code expires in 1:59 secs</p>
           <p>Didn't get any code? <span className="resend">resend code</span>  </p>
           </div>
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

export default Verify