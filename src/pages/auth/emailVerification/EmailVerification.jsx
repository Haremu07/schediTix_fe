import "./emailVerification.css"
import { useNavigate, useParams } from "react-router";
// import Logo from "../../../assets/orangelogo.png"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from 'antd';
import { useEffect, useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";



const EmailVerification = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const BASEURL = "https://scheditix.onrender.com";

  
  const [isVerifying, setIsVerifying] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);




  const handleEmailVerification = async () => {
    setIsVerifying(0)
    try {
      const response = await axios.get(`${BASEURL}/api/v1/verify/user/${token}`);
      if (response.status === 200) {
        toast.success("Email verified successfully"); 
        setIsVerifying(1); 
        setIsModalOpen(true);
        setTimeout(() => {
          
          navigate("/login"); 
        }, 5000);
        
      }
      setIsVerifying(2)
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid or expired token.");
      setIsVerifying(2)
    } 
  };

  useEffect(() => {
    if (token) {
      handleEmailVerification();
    } else {
      setIsVerifying(2);
    }
  }, [token]);

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
      
          <div className="form">
            
          {isVerifying ===0? <p className="Passage">Verifying...</p> :isVerifying ===1? (
         <>
          <Modal
                open={isModalOpen}
                okButtonProps={{ style: { display: "none" } }}
                cancelButtonProps={{ style: { display: "none" } }}
                closable={false}
              >
                <div className="success-bgs">
                  <div className="verified-icon-holders">
                    <VscVerifiedFilled className="verified-icons" />
                  </div>
                  <div className="successful-text-holders">
                    <h3 className="successful-texts">Congratulations your Email has been verified!!</h3>
                  </div>
                </div>
              </Modal>
         </> 
            
        ) : <p className="Passage"> Failed</p> }
        
              
              
            
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


