import orangelogo from "../../assets/orangelogo.png"
import "./headerAttendee.css"
import CircleImg from "../../assets/Frame 129.png"

const AttendeHeader = () => {
  return (
    <div className='headerAttende'>
      <div className="headerAttendeImgBox">
      <img className="headerAttendeImg" src={orangelogo} alt="" />
      </div>
      <h2 className="headerAttendeh2">Welcome,     Cynthia</h2>
      <div className="headerAttendeProfile">
        <div className="headerAttendeProfileCircle">
          <img className="headerAttendeProfileCircleImg" src={CircleImg} alt="" />
        </div>
        <p>Cynthia Chidera</p>
      </div>
    </div>
  )
}

export default AttendeHeader