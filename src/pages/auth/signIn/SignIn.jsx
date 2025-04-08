import "./signin.css"
import { MdEmail } from "react-icons/md";
import { GiDialPadlock } from "react-icons/gi";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import orangeLogo from "../../../assets/orangelogo.png"

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <div className="signin-container">
      <div className="signIn-Nav">
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

      <div className="signin-body">
        <div className="signin-form">
             <span className="Back" onClick={() => navigate("/register")}><FaArrowLeft/><p>go back</p></span>
          <div className="sigin-form-Header">
          <h2 >Login to continue</h2>
          </div>
          <form className="form">
          <span className="input" >
            <MdEmail/>
            <input type="email" className="input2"  placeholder="enther your email" />
          </span>
          <span className="input">
            <GiDialPadlock/>
           <input type="password" className="input2" placeholder="enther your password"/>
          </span>
          <h4 onClick={() => navigate("/forget-password")} style={{cursor: "pointer"}}>forget password</h4>
            <button type="submit" className="btn">Sign In</button>
            <span className="signinBox"><h5>Dont have an account?
                <span className="box" onClick={()=> navigate("/register")}>sign Up</span>
               </h5></span>
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