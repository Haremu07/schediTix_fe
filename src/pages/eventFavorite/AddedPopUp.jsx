import Successful from "../../assets/Mask group.png"
import "./purchaseDetails.css"

const AddedPopUp = () => {
  return (
    <div className='AddedPopUpBody'>
        <div className="AddedPopUpCard">
            <div className="AddedPopUpCardSmall">
                <div className="ImgBox">
                <img className="Img" src={Successful} alt="" />
                </div>
                <h2>Congratulations!!!</h2>
            </div>
        </div>
    </div>
  )
}

export default AddedPopUp