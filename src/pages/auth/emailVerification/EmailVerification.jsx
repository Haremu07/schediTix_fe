import "./emailVerification.css"
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import Logo from "../../../assets/orangelogo.png"
import orangeLogo from "../../../assets/orangelogo.png"


const EmailVerification = () => {
  const navigate = useNavigate()
  return (
    <div className="email-verification-container">
      <div className="Nav">
               <div className="signIn-Nav-Header">
                 <div className="LogoBox">
                   <span className="GoBack" onClick={() => navigate("/forget-password")}>  <FaArrowLeft/><p>go back</p></span>
                 </div>
                 <div className="signIn-Nav-Box">
               <div className="navBoxs1"></div>
               <div className="navBoxs2"></div>
               </div>
               </div>
      </div>
      <div className="email-verification-body">
        <div className="email-verification-form2">
          <div className="email-verification-form-Header">
          <img className="Logo" src={Logo} alt="" onClick={() => navigate("/")} />
          <h2>Welcome to ShediTix!</h2>
          </div>
          <form className="form">
            <p className="Passage2">Congratulations Cynthia Chidera!
               You’re officially part of the SchediTix family! 
               🙌 We’re so excited to help you create, manage, and promote amazing events.</p> 

           <p className="Passage2">Before you dive in, we just need you to <span className="resend1">verify
             your email</span>  to activate your account. It’s super
              quick, just click the button below and you’re 
              good to go! 🥰</p>

           <div className="CodeBox">
           <p> <button className="resend" onClick={() => navigate("/login")}>Verify email address</button>  </p>
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

export default EmailVerification


