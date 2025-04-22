import axios from "axios";
import React, { useEffect, useId } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DeletePopUp = ({setToggle}) => {
  const navigate = useNavigate();
  // localStorage.setItem('token',)
  // console.log("clicked", setToggle)
  const BASEURL = "https://scheditix.onrender.com" 

  const token = localStorage.getItem(`userToken`)
  console.log(token)
  const userData = JSON.parse(localStorage.getItem(`userData`))
  const userId = userData._id
  console.log(userId)

  const headers = {
  Authorization: `Bearer ${token}`
}
  const handleDeelete = async() => {
    try {
      const res = await axios.delete(`${BASEURL}/api/v1/delete/user/${userId}`, {headers})
      console.log("Deleted", res.data)
      toast.success(res.data)
      localStorage.clear()
      navigate("/")
      // localStorage.clear()
    } catch (error) {
      console.log("Not Deleted", error)
      if(error.res.data.message === "Session timed-out: Please login to continue" || "Unauthorized")
        localStorage.clear()
      navigate("/")
      toast.error(error.res.data.message)
    }
  }

  
  return (
    <div className="DeletePopUpBody">
      <div className="DeletePopUpCard">
        <div className="DeletePopUpCardSmall">
            <h2>Are you sure you want to delete your account?</h2>

       <div className="BtnBox">
       <button
         onClick={
              handleDeelete
         }
         className="YesBtn" 
         >Yes</button>
         <button className="NoBtn" 
          onClick={() => setToggle(false)}
         >No</button>
       </div>
          <div className="Note"
          >Note:account deletion takes 48 hours</div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
