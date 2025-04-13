import React from "react";

const DeletePopUp = ({handleToggle}) => {
  return (
    <div className="DeletePopUpBody">
      <div className="DeletePopUpCard">
        <button
         onClick={!handleToggle}
         >close</button>
      </div>
    </div>
  );
};

export default DeletePopUp;
