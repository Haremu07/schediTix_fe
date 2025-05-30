import "./purchaseDetails.css";
import { IoIosArrowBack } from "react-icons/io";
import { GoDash } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddedPopUp from "./AddedPopUp";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const PurchaseDetails = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { eventId } = useParams();

  const handleToggle = () => {
    setToggle(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setToggle(!true);
    }, 3000);
  }, []);

  const [ticketPurchase, setTicketPurchase] = useState({
    fullName: "",
    email:"",
    numberOfTicket:"",
    needCarPackingSpace:"",
    specialRequest: "",
  });

  // const [ticketId, setTicketId] = useState("")
  console.log(ticketPurchase);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketPurchase((prev) => ({ ...prev, [name]: value }));
  };
  const nav = useNavigate();
  
  // console.log(eventId);
  
  
  const BASEURL = "https://scheditix.onrender.com";

  const token = localStorage.getItem(`userToken`)
  console.log(token)
  const headers = {
    Authorization : `Bearer: ${token}`
  }

  const handleTicketPurchase = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASEURL}/api/v1/create/ticket/${eventId}`,
        ticketPurchase, {headers}
      );
      console.log(response);

      const loadingId =toast.loading("Please wait")
      if (response.status === 201) {
        toast.dismiss(loadingId)
        setTicketPurchase(response.data?.data)
        // setTicketId(response?.data?.data?._id)
        toast.success(response.data?.message);
        handlePayment(response?.data?.data[0]?._id)
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const [event, setEvent] = useState([])

  const getAllEvent= async()=>{
    try{
      const res = await axios.get(`https://scheditix.onrender.com/api/v1/event/${eventId}`)
      console.log(res?.data?.data);
      setEvent(res?.data?.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getAllEvent()
  },[])

  const handlePayment = async (id) => {
    try {
      const response = await axios.post(`${BASEURL}/api/v1/payment/${id}`)
      console.log(response)
      if(response?.status === 200){
        toast.success(response?.data?.message)
        window.location.assign(response?.data?.data?.checkout_url)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(eventId)

  return (
    <div className="PurchaseDetailsBody">
      {toggle && <AddedPopUp />}
      <div className="PurchaseDetailsHeader">
        <IoIosArrowBack
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
          size={30}
        />
        <h3> back</h3>
        <GoDash size={30} />
        <h3 style={{ color: "#ff5722" }}>purchase ticket</h3>
      </div>
      <Toaster />
      <div className="PurchaseDetailsTitle">
        <h3> {event.eventTitle}</h3>
      </div>
      <form className="Form" onSubmit={handleTicketPurchase}>
        <p>Enter attendance details</p>
        <h3>Full Name</h3>
        <div className="InputBox">
          <FaUser size={20} />
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={ticketPurchase.fullName}
            placeholder="enter your full name"
            className="Input"
          />
        </div>

        <h3>Email Address</h3>
        <div className="InputBox">
          <MdEmail size={20} />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={ticketPurchase.email}
            placeholder="enter a valid email address to receive this event information"
            className="Input"
          />
        </div>

        <div className="NumberTicketBox">
          <div className="NumberTicketBoxdiv">
            <h3>Number of ticket(s)</h3>
            <div className="InputBox2">
              <BsTicketPerforatedFill size={20} />
              <input
                type="number"
                min={1}
                name="numberOfTicket"
                onChange={handleChange}
                value={ticketPurchase.numberOfTicket}
                placeholder="enter number of ticket"
                className="Input2"
              />
            </div>
          </div>

          <span className="NumberTicketBoxdiv">
            <h3>Need car parking space?</h3>
            <div className="InputBox2">
              <BsTicketPerforatedFill size={20} />
              <select
                name="needCarPackingSpace"
                onChange={handleChange}
                // value={ticketPurchase.needCarPackingSpace}
                className="input2"
              >
                <option  value="">Enter Yes/No</option>
                <option value="yes" >yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </span>
        </div>

        <h3>Special Request</h3>
        <div className="InputBox">
          <RiPencilFill size={20} />
          <input
            type="text"
            name="specialRequest"
            onChange={handleChange}
            value={ticketPurchase.specialRequest}
            placeholder="describe any special request for this event"
            className="Input"
          />
        </div>
        <button className="Btnn" type="submit"
        //  onClick={handlePayment}
         >
          Proceed to checkout
        </button>
      </form>
    </div>
  );
};

export default PurchaseDetails;
