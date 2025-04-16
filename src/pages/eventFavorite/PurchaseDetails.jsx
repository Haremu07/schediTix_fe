import "./purchaseDetails.css"
import { IoIosArrowBack } from "react-icons/io";
import { GoDash } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AddedPopUp from "./AddedPopUp";

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
  return (
    <div className='PurchaseDetailsBody'>
                    {toggle && <AddedPopUp />}
        <div className="PurchaseDetailsHeader">
        <IoIosArrowBack onClick={() => navigate("/dashboard/ticket-purchace")} style={{cursor: "pointer"}} size={30}/> 
           <h3> back</h3>
           <GoDash size={30}/>
           <h3 style={{color: "#ff5722"}}>purchase ticket</h3>
        </div>
        <div className="PurchaseDetailsTitle">
            <h3>MyKealwise Live In Aj City</h3>
        </div>
        <form className="Form">
        <p>Enter attendance details</p>
        <h3>Full Name</h3>
        <div className="InputBox">
        <FaUser size={20}/>
        <input type="text" placeholder="enter your full name" className="Input" />
        </div>

        <h3>Email Address</h3>
        <div className="InputBox">
        <MdEmail size={20}/>
        <input type="text" placeholder="enter a valid email address to receive this event information" className="Input" />
        </div>

        <div className="NumberTicketBox">
       <div className="NumberTicketBoxdiv">
       <h3>Number of ticket(s)</h3>
        <div className="InputBox2">
        <BsTicketPerforatedFill size={20}/>
        <input type="text" placeholder="enter number of ticket" className="Input2" />
        </div>
       </div>

        <span className="NumberTicketBoxdiv">
        <h3>Need car parking space?</h3>
        <div className="InputBox2">
        <BsTicketPerforatedFill size={20}/>
        <input type="text" placeholder="enter Yes/No" className="Input2" />
        </div>
        </span>
        </div>

        <h3>Special Request</h3>
        <div className="InputBox">
        <RiPencilFill size={20}/>
        <input type="text" placeholder="describe any special request for this event" className="Input" />
        </div>
        <button className="Btnn" onClick={handleToggle}>Proceed to checkout</button>
        </form>
    </div>
  )
}

export default PurchaseDetails