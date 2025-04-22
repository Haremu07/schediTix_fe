import "./purchaseDetails.css"
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
     const [toggle, setToggle] = useState(false)
          
          const handleToggle = () => {
            setToggle(true)
          }
        
          useEffect(() =>{
              setTimeout(() => {
                  setToggle(!true)
              },3000)
          },[])
          const[ticketPurchase, setTicketPurchase] = useState({
             fullName:"",
             email: "",
             numberOfTicket:"",
             needCarParkingSpace:"",
             specialRequest :"",
          })
        
          
           console.log(ticketPurchase)
          const handleChange = (e) => {
            const { name, value } = e.target;
            setTicketPurchase((prev) => ({ ...prev, [name]: value }));
          };
        const nav = useNavigate()
          const {eventId} = useParams()
          console.log(eventId)
          const BASEURL = "https://scheditix.onrender.com";
          const handleTicketPurchase = async () =>{
            try{
                const response = await axios.post(`${BASEURL}/api/v1/create/ticket/${eventId}`, ticketPurchase)
                console.log(response.data.data)
              
                if(response.status === 200 ){
                  // setTicketPurchase(response)
                  toast.success(response)
                  setTimeout(()=>{
                    handleToggle()
                  },4000)
                  nav("/dashboard/payout-details" )
                }

            }
            catch(error){
              console.log(error)
              toast.error(error?.data?.message )
             

            }
          }
          localStorage.setItem("ticPurchase", "response?.data?.data")
          // useEffect(()=>{
          //   handleTicketPurchase();
          // },[])
  return (
    <div className='PurchaseDetailsBody'>
                    {toggle && <AddedPopUp />}
        <div className="PurchaseDetailsHeader">
        <IoIosArrowBack onClick={() => navigate("/dashboard/ticket-purchace")} style={{cursor: "pointer"}} size={30}/> 
           <h3> back</h3>
           <GoDash size={30}/>
           <h3 style={{color: "#ff5722"}}>purchase ticket</h3>
        </div>
        <Toaster />
        <div className="PurchaseDetailsTitle">
            <h3>MyKealwise Live In Aj City</h3>
        </div>
        <form className="Form">
        <p>Enter attendance details</p>
        <h3>Full Name</h3>
        <div className="InputBox">
        <FaUser size={20}/>
        <input type="text" name="fullName" onChange={handleChange} value={ticketPurchase.fullName} placeholder="enter your full name" className="Input" />
        </div>

        <h3>Email Address</h3>
        <div className="InputBox">
        <MdEmail size={20}/>
        <input type="email" name="email" onChange={handleChange} value={ticketPurchase.email} placeholder="enter a valid email address to receive this event information" className="Input" />
        </div>

        <div className="NumberTicketBox">
       <div className="NumberTicketBoxdiv">
       <h3>Number of ticket(s)</h3>
        <div className="InputBox2">
        <BsTicketPerforatedFill size={20}/>
        <input type="number" min={1} name="numberOfTicket" onChange={handleChange} value={ticketPurchase.numberOfTicket} placeholder="enter number of ticket" className="Input2" />
        </div>
       </div>

        <span className="NumberTicketBoxdiv">
        <h3>Need car parking space?</h3>
        <div className="InputBox2">
        <BsTicketPerforatedFill size={20}/>
       <select name="needCarParkingSpace" onChange={handleChange} value={ticketPurchase.needCarParkingSpace}  className="input2">
       <option value="">Enter Yes/No</option>
        <option value="Yes">yes</option>
        <option value="No">No</option>
       </select>
        </div>
        </span>
        </div>

        <h3>Special Request</h3>
        <div className="InputBox">
        <RiPencilFill size={20}/>
        <input type="text"  name="specialRequest" onChange={handleChange} value={ticketPurchase.specialRequest} placeholder="describe any special request for this event" className="Input" />
        </div>
        <button className="Btnn" onClick={handleTicketPurchase}>Proceed to checkout</button>
        </form>
    </div>
  )
}

export default PurchaseDetails