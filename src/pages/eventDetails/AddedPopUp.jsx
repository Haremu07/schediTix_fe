import "./eventDetails.css"
import Successful from "../../assets/Mask group.png"

const AddedPopUp = () => {
  return (
    <div className='AddedPopUpBody'>
        <div className="AddedPopUpCard">
            <div className="AddedPopUpCardSmall">
                <div className="ImgBox">
                <img className="Img" src={Successful} alt="" />
                </div>
                <h2>Congratulations on successfully creating an event!!</h2>
            </div>
        </div>
    </div>
  )
}

export default AddedPopUp