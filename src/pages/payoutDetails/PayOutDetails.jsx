import React, { useEffect, useState } from 'react';
import '../payoutDetails/payOutDetails.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiBankFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import img from '../../../src/assets/paypal.png';
import { TbChartCandle } from "react-icons/tb";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Modal, Select } from 'antd';
import { VscVerifiedFilled } from "react-icons/vsc";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const PayOutDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpens, setIsModalOpens] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [allEvent, setAllEvent] = useState([])

  // const BASEURL = "https://scheditix.onrender.com";


  const handleAllEvent = async() => {
    try {
      const response = await axios.get(`${BASEURL}/api/v1/events`)
      console.log(response)
      setAllEvent(response.data.data[0])
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.data.message)
    }
  }


  useEffect(() => {
    handleAllEvent()
  },[])

  const getUserId = () => {
    const userData = localStorage.getItem("userData");
    
    if (!userData) return null;
    
    try {
      const parsedUser = JSON.parse(userData);
      return parsedUser._id || null;
    } catch (error) {
      console.error("Failed to parse user data:", error);
      return null;
    }
  };

  const userId = getUserId();
  console.log("User ID:", userId);
  
  const [getTicketId, setGetTicketId]=useState([])
  const BASE = "https://scheditix.onrender.com";
  const getId = async ()=>{
    try {
      const response = await axios.get(`${BASE}/api/v1/getPlannerEvent/${userId}`)
      setGetTicketId(response?.data?.data[0])
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getId()
  },[])



  

  const handleInput = () => {
    setShowInput(true)
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showModals = () => {
    setIsModalOpens(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const timeout = () => {
    setTimeout(() => {
      setIsModalOpens(false);
    }, 2000);
  };

  const options = allEvent?.eventTitle ? 
  [ {value: allEvent?.eventTitle,  label: allEvent.eventTitle }]
  : []

    
    // [ value: allEvent?.eventTitle,  label: allEvent.eventTitle ]
    // { value: 'Startup Summit 2025', label: 'Startup Summit 2025' },
    // { value: 'Tech Conference 2025', label: 'Tech Conference 2025' },
    // { value: 'Tech Conference 2025', label: 'Tech Conference 2025' },
    // { value: 'Startup Summit 2025', label: 'Startup Summit 2025' },
    // { value: 'Tech Conference 2025', label: 'Tech Conference 2025' },
  

  const handleOptions = (selectedOption) => {
    console.log('Seleted:', selectedOption);
  }
  const BASEURL = "https://scheditix.onrender.com";
  const {ticketId}=useParams()
 const token = localStorage.getItem("userToken")
  const [paymentdetails, setPaymentDetails] = useState({

  })
  const handlePaymentDetails = async () =>{
   try{
    const response = await axios.post(`${BASEURL}/api/v1/payment/initialize/${ticketId}`, paymentdetails, {headers:{
      Authorization : `Bearer ${token}`
    }})
    console.log(response.data)
    
    if(response.status === 200){
      setTimeout(()=>{
        window.location.href(response?.data?.data?.checkout_Url)
      },4000)
     
    }
   }
   catch(err){
console.log(err)
   }
  }

  
  
  return (
    <div className='payout-bg'>
      <div className='payout-wrapper'>
        <div className='payout-model-wrapper'>
          <div className='move-back'>
            <p className='back-arrow'><IoIosArrowBack /></p>
            <h3 className='back-text'>back</h3>
          </div>

          <div className='payout-model-holder'>
            <div className='payout-model-holder-one'>
              <div className='bank-details'>
                <div className='holder-bank-detailss'>
                  <div className='holder-bank-detailss-child'>
                    <p className='bank-icon'><RiBankFill /></p>
                    <h3>Bank details</h3>
                  </div>
                  <div className='radio-container'>
                    <input type="radio" className='radio' name='payment' />
                  </div>
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Bank Account Name</h3></label>
                  <input type="text" placeholder='mighty solomon' className='bank-account-input' style={{ padding: "7px" }} />
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Bank Account Number</h3></label>
                  <input type="text" placeholder='4567  0012  3947  3478' className='bank-account-input' style={{ padding: "7px" }} />
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Bank Name</h3></label>
                  <input type="text" placeholder='Access bank' className='Access-bank-input' />
                </div>
              </div>
            </div>

            {/* <div className='payout-model-holder-two'>
              <div className='paypal-details'>
                <div className='holder-bank-detailss'>
                  <div className='holder-bank-detailss-child'>
                    <p className='bank-icon'><img src={img} alt="paypal-icon" /></p>
                    <h3>Paypal</h3>
                  </div>
                  <div className='radio-container'>
                    <input type="radio" className='radio' name='payment' />
                  </div>
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Paypal email address</h3></label>
                  <input type="text" placeholder='mighty solomon' className='bank-account-input' />
                </div>

                <div className='holder-bank-details'>
                  <label><h3>Full name</h3></label>
                  <div className='bank-account-input'>
                    <input type="text" placeholder='mighty solomon' className='bank-account-inputs' />
                    <div className='ng'><h3>NG</h3></div>
                  </div>
                </div>
              </div>

            </div> */}
              <button className='request-for-payment-btn' onClick={showModal}>
                <h3>Request For payment</h3>
              </button>

            <Modal open={isModalOpen} onCancel={handleCancel} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: "none" } }}>
              <div className='modal-bg'>
                <div className='payment-modal-header'>
                  <h3>Choose an event to proceed</h3>
                </div>

                <div className='amount-input-holder'>
                  <p className='amount'>Select Event</p>
                  <Select options={options} onChange={handleOptions} style={{width: "50%"}}/>

                </div>

                <div className='request-for-payment-btn-div'>
                  <button className='request-for-payment-btns'
                  >
                    {
                      showInput? (
                        <div className="div">
                          <input type="number"  placeholder='Enter amount' className='bank-account-input' style={{ padding: "7px" }} /> 
                           <button className='divBtn'
                            onClick={() => {setShowInput(false), timeout(); showModals(); }}
                            >Request For payment</button>
                        </div>
                      ): null
                    }
                    <h3 onClick={handleInput}>Continue</h3>
                  </button>
                </div>
              </div>
            </Modal>

            <Modal open={isModalOpens} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: "none" } }} closable={false}>
              <div className='success-bg'>
                <div className='verified-icon-holder'><VscVerifiedFilled className='verified-icon' /></div>
                <div className='successful-text-holder'>
                  <h3 className='successful-text'>Congratulations payment requested successfully!!!</h3>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className='payout-history-bg'>
        </div>
      </div>
    </div>
  );
};

export default PayOutDetails;

