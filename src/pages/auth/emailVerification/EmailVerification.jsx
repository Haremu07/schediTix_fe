import "./emailVerification.css";
import { useNavigate, useParams } from "react-router";
import Logo from "../../../assets/orangelogo.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from 'antd';
import { useEffect, useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";

const EmailVerification = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const BASEURL = "https://scheditix.onrender.com";

  
  const [isVerifying, setIsVerifying] = useState(false);
  const [isModalOpens, setIsModalOpens] = useState(false);

  const showModal = () => setIsModalOpens(true);


  const handleEmailVerification = async () => {
    setIsVerifying(true); 
    try {
      const response = await axios.get(`${BASEURL}/api/v1/verify/user/${token}`);
      if (response.status === 200) {
        toast.success("Email verified successfully");
        showModal(); 
        setTimeout(() => {
          navigate("/login"); 
        }, 3000);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid or expired token.");
    } finally {
      setIsVerifying(false); 
    }
  };

  useEffect(() => {
    if (token) {
      handleEmailVerification();
    }
  }, [token]);

  return (
    <div className="email-verification-container">
      <div className="Nav">
        <div className="signIn-Nav-Header">
          <div className="LogoBox"><Toaster /></div>
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
            {!token ? (
              <p className="Passage2">Invalid verification link. Please check your email and try again.</p>
            ) : isVerifying ? (
              <p className="Passage2">Please wait while we verify your email...</p> 
            ) : (
              <Modal
                open={isModalOpens}
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
            )}
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
  );
};

export default EmailVerification;