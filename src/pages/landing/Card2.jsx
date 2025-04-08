import "./cards.css"
import { FaArrowRightLong } from "react-icons/fa6";

const Card2 = (props) => {
  return (
    <div className="Card2">
        <div className="Card2Nav">
            <h3>{props.text}</h3>
            <p>{props.content}</p>
                <p className="SeeM">See more <FaArrowRightLong/> </p>
        </div>
        <div className="Card2Nav2">
            <img className="Card2Nav2Img" src={props.image} alt="" />
        </div>
    </div>
  )
}

export default Card2