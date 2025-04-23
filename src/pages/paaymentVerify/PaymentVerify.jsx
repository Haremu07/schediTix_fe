import "./paymentverify.css";
import successIcon from "../../assets/successcheck.jpg";
import failedIcon from "../../assets/namur-failure-filled-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentVerify = () => {
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("")
  const [searchParams]  = useSearchParams()
  const reference = searchParams.get('reference')
  console.log(reference);
  const { id } = useParams();

  const navigate = useNavigate()
  const baseUrl = "https://scheditix.onrender.com";

  const handleVerify = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/verify?reference=${reference}`
      );
      console.log(response?.data);
      setTimeout(() => {
        if (response?.data?.data?.status === "Successful") {
          setStatus(1);
        }else{
        setStatus(2);
        setMessage(response?.data?.data?.message)
        }
      }, 3000);
      console.log(response)
    } catch (error) {
      setStatus(2);
      setMessage(error?.response?.data?.message)
      console.log(error);
    }
  };

  useEffect(() => {
    if (reference) handleVerify();
  }, [reference]);

  return (
    <div className="paymentVerifyBody">
      {status === 0 ? (
        <>
          <p>Please wait while we verify your payment</p>
          <span>
            <div className="dot-spinner">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </div>
          </span>
        </>
      ) : status === 1 ? (
        <>
          <button onClick={() => navigate(`/dashboard/purchase-details/${id}`)} className="verifyHomeBtn">go back</button>
          <p>Payment successfull</p>
          <span>
            <img src={successIcon} alt="" />
          </span>
        </>
      ) : (
        <>
          <p>Payment failed, please try again</p>
          <span>
            <img src={failedIcon} alt="" style={{ width: "40px" }} />
          </span>
          <p>{message}</p>
        </>
      )}
    </div>
  );
};

export default PaymentVerify;
