import "./forgetPassword.css"
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router";
// import { FaArrowLeft } from "react-icons/fa6";
import orangeLogo from "../../../assets/orangelogo.png"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button, Modal } from 'antd';



const ForgetPassword = () => {
  const [modal, contextHolder] = Modal.useModal();
  const BASEURL = "https://scheditix.onrender.com";
  const navigate = useNavigate()
  const [email, setEmail] = useState({
    email: ""
  });

  const prompMessage = () => {
    let secondsToGo = 10;
    const instance = modal.success({
      title: 'Reset Password link have been sent to your email',
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  
  

  const [loading, setLoading] = useState(false)

  const handleForgotpassword = async (e) =>{
    e.preventDefault();
    setLoading(true)
try{
  // console.log(email)
const response = await axios.post( `${BASEURL}/api/v1/forgot-password/user`, {email: email})

console.log(response?.data)
toast.success(response?.data?.message)
if(response.status === 200){
  setTimeout(() => {
    prompMessage()
    setLoading(false)
  }, 3000)
}
} catch(err){
console.log(err)
toast.error(err?.data?.message)
}
setLoading(false)
  }
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
            <p className="Passage">Enter your email address to receive a password reset email</p>
          <span className="input" >
            <MdEmail/>
            <input type="email" className="input2" value={email.email} placeholder="enter your email" onChange={(e)=> setEmail(e.target.value)}/>
          </span>
            <button type="submit" className="btn" onClick={handleForgotpassword}>{loading ? "Loading..." : "Continue"}</button>
            {contextHolder}
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