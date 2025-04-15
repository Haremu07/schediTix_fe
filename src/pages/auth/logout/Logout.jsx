import { useNavigate } from "react-router-dom"
import "./logOut.css"

const Logout = () => {
  const navigate = useNavigate()
  return (
    <div className='LogoutBody'>
      <div className="LogOutCard">
          <div className="LogoutCardSmall">
        <h2>Are you sure you want to log Out?</h2>
          <div className="btnBox">
          <button className="LogOutbtn" onClick={() => navigate("/") }>Yes</button>
          <button className="LogOutbtn2" onClick={() => navigate("/dashboard/upcoming-events") }>No</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Logout