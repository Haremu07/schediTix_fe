
import "./emailVerification.css"
import { useNavigate } from "react-router";
import orangeLogo from "../../../assets/orangelogo.png";


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
         <img src={orangeLogo} alt="" />
          <p>🎉Welcome to SchediTix!🎉</p>
          </div>
          <form className="form">
            <p className="Passage">We’ve sent a verification link to your email. It’s super quick, just click the button below and you’re good to go! 🥰.</p>
            <button type="submit" className="btn" onClick={()=> navigate("/login")}>
              verify your email address
              </button>
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