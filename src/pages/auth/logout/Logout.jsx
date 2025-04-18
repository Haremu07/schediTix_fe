import { useNavigate } from "react-router-dom"
import "./logOut.css"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate()
  const BASEURL = "https://scheditix.onrender.com";

  const token = localStorage.getItem(`userToken`)
  console.log(token)
const headers = {
  Authorization: `Bearer ${token}`
}
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BASEURL}/api/v1/logout`, {},{headers} )
      if (response.data.message === "authorized")
        toast.success("Logged out successfull")
      localStorage.removeItem("userToken")
      localStorage.removeItem("userData")
      
      setTimeout(() => {
        navigate("/")
      },3000)
      console.log(response)
    } catch (error) {
      if(error.response?.data?.message === "Unauthorized"){
        toast.error(error.response?.data?.message || "Logout failed")
      }else if (response.data.message === "Request failed with status code 403"){
        toast.error("Check your connection")
      console.log(error)
      }else{
        toast.error("Check your connection")
      console.log(error)
      }
    }
  }
  return (
    <div className='LogoutBody'>
      <div className="LogOutCard">
        <Toaster/>
          <div className="LogoutCardSmall">
        <h2>Are you sure you want to log Out?</h2>
          <div className="btnBox">
          <button className="LogOutbtn" onClick={ handleLogout}
          >Yes</button>
          <button className="LogOutbtn2" onClick={() => navigate("/dashboard/upcoming-events") }>No</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Logout