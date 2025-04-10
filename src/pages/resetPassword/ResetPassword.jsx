import "./resetPassword.css"
import { GiDialPadlock } from "react-icons/gi";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import orangeLogo from "../../assets/orangelogo.png"

const ResetPassword = () => {
  const navigate = useNavigate()
  return (
    <div className="ResetPassword-container">
      <div className="Nav">
      <div className="signIn-Nav-Header">
          <div className="LogoBox">
          <img  className="Logo" src={orangeLogo} alt="" onClick={() => navigate("/")} />
          </div>
          <div className="signIn-Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
        </div>
      </div>
      <div className="ResetPassword-body">
        <div className="ResetPassword-form">
          <div className="ResetPassword-form-Header">
        {/* <span className="Back" onClick={() => navigate("/reset-password")}><FaArrowLeft/><p>go back</p></span> */}
          <h2>Set your new password</h2>
          <p>Choose a strong password to secure your account</p>
          </div>
          <form className="form">
          <span className="input">
                     <GiDialPadlock/>
                    <input type="password" className="input2" placeholder="enther your password"/>
             </span>
          <span className="input">
                     <GiDialPadlock/>
                    <input type="password" className="input2" placeholder="enther your password"/>
             </span>
            <button type="submit" className="btn" onClick={()=> navigate("/login")}>Save Password</button>
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

export default ResetPassword