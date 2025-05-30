import { useNavigate } from "react-router-dom"
import "./logOut.css"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate()
  const BASEURL = "https://scheditix.onrender.com";

  // const loading = toast.loading("Please wait...")

  const token = localStorage.getItem(`userToken`)
  console.log(token)
const headers = {
  Authorization: `Bearer ${token}`
}
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BASEURL}/api/v1/logout/`, {},{headers} )
      if (response.data.message ===  200 || "authorized" ){
        toast.success("Logged out successfull")
        // toast.loading(loading)
        // toast.dismiss(loading)
        localStorage.clear()
          navigate("/login")
      }
    } catch (error) {
      console.log(error)
      if(error.response?.data?.message === "Unauthorized"){
        toast.error(error.response?.data?.message || "Logout failed")
        toast.error(error.response?.data.message)
        localStorage.clear()
        navigate("/login")
      }else if (error.response.data.message === "Request failed with status code 403"){
        toast.error("Check your connection")
        localStorage.clear()
        navigate("/login")
      console.log(error)
      }else if(error.response?.data.message === "Session timed-out: Please login to continue")
        toast.success("Logged out successfull")
        localStorage.clear()
          navigate("/login")
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