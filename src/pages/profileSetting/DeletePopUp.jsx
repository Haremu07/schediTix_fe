import React from "react";
import { useNavigate } from "react-router-dom";

const DeletePopUp = ({setToggle}) => {
  const navigate = useNavigate();
  // localStorage.setItem('token',)
  // console.log("clicked", setToggle)
  return (
    <div className="DeletePopUpBody">
      <div className="DeletePopUpCard">
        <div className="DeletePopUpCardSmall">
            <h2>Are you sure you want to delete your account?</h2>

       <div className="BtnBox">
       <button
         onClick={ () => navigate("/")}
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
