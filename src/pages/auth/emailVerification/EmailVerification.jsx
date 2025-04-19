import "./emailVerification.css"
import { useNavigate, useParams } from "react-router";
import Logo from "../../../assets/orangelogo.png"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Flex, Spin } from 'antd';
import { useEffect } from "react";


const EmailVerification = () => {
  const navigate = useNavigate()
  const { token } = useParams();
  const BASEURL = "https://scheditix.onrender.com";
  const user = localStorage.getItem("userData")
  // const token = JSON.parse(localStorage.getItem("userToken"))
  console.log(token)
  const handleEmailVerification = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/v1/verify/user/${token}`);
      console.log(response)
      toast.success(response?.data?.message)
      if(response.status === 200){
        setTimeout(()=>{
          toast.success("Email verified successfully")
          navigate("/login")
        }, 3000)
      } else if(response.status === 400){
        toast.error(response?.status)
        setTimeout(()=>{
          navigate("/login")
        }, 3000)
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || "Please verify your email");
    }
  }


  useEffect(() => {
    handleEmailVerification()
  },[])
  return (
    <div className="email-verification-container">
      <div className="Nav">
               <div className="signIn-Nav-Header">
                 <div className="LogoBox">
                  <Toaster/>
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
           
            <Flex align="center" gap="middle" style={{width: "70%", height: "200px",  paddingLeft: "90px", placeSelf: "center"}}>
    {/* <Spin size="small" /> */}
    {/* <Spin /> */}
    <Spin size="large"  style={{width: "70px",}} />
  </Flex>

               {/* You’re officially part of the SchediTix family! 
               🙌 We’re so excited to help you create, manage, and promote amazing events.</p> 

           <p className="Passage2">Before you dive in, we just need you to <span className="resend1">verify
             your email</span>  to activate your account. It’s super
              quick, just click the button below and you’re 
              good to go! 🥰</p> */}

           {/* <div className="CodeBox">
           <p> <button className="resend" onClick={handleEmailVerification}>Verify email address</button>  </p>
           </div> */}
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


