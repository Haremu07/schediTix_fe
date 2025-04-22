import "./checkIn.css"
import { IoSearch } from "react-icons/io5";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CheckIn = () => {
  const navigate = useNavigate();
const [attendee, setAttendee] =useState([])
const [allEvent, setAllEvent] = useState([])
const [allAttendee, setAllAttendee] = useState([])
const [search, setSearch] = useState("")

  const BASEURL = "https://scheditix.onrender.com";
   
  const { id } = useParams()
// console.log("Event ID:", id);
  const handleAttendee = async() => {
    try {
      const res = await axios.post(`${BASEURL}/api/v1/check-in/${id}`)
      console.log(res?.data)
      setAttendee(ressponse?.data.data)
      toast.success(response?.data.data.message)
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data.data.message)
    }
  }

  
  const handleCheckIn = async() => {
    try {
      const response = await axios.get(`${BASEURL}/api/v1/event/${id}`)
      console.log(response)
      setAllEvent(response.data?.data)
      toast.success(response.data?.message)
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.data?.message)
    }
  }
  
  

    
  const handleAllAttendee = async() => {
    try {
      const response = await axios.get(`${BASEURL}/api/v1/attendees`)
      console.log(response)
      setAllAttendee(response.data?.data)
      toast.success(response.data?.message)
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.data?.message)
    }
  }

  useEffect(() => {
    handleCheckIn()
    handleAllAttendee()
  },[])

  const filteredAttendee = attendee.filter((e) => 
    e.checkinCode.toLowerCase().includes(search.toLocaleLowerCase())
  )
  return (
    <div className="mainPage">
      <Toaster/>
      <div className="mainPageHeader" onClick={() => navigate("/dashboard/checkin")}>
      <IoChevronBack size={30} style={{cursor: "pointer"}} /> <p>back</p>
      </div>
      <section className='upperSection'>
        <div className='cardDiv'>
          <article className='imgCard'>
            <img src={allEvent.image?.imageUrl} alt=""  />
          </article>

          <div className='textCard'>
          <p className='h1'>{allEvent.eventTitle}</p>
          <p className="p">{allEvent.eventLocation}</p>
          <div className='dateAndTime'>
            <p>{allEvent.startDate}</p>
            <p>{allEvent.startTime}</p>
          </div>
          
          <div className='sumNumbers'>
              <section className='sumOfAttendees'>
                <h1 style={{fontSize: "10px"}}>{allEvent.totalAttendee}</h1>
                <p>Attendee</p>
              </section>
              <section className='sumTicketSold'>
                <h1 style={{fontSize: "10px"}}>{allEvent.ticketQuantity}</h1>
                <p>Attendee</p>
              </section>
          </div>
        </div>
        </div>

        <div className='checkinDiv'>
          <h1 style={{fontSize: "20px"}}>Enter attendee code to check in</h1>
          <div className='checkinInput'>
            <input type="text" placeholder='enter code' className='chekinInput' value={search} onChange={(e) => setSearch(e.target.value)}/>
    
    <button className='checkinButton' onClick={handleAttendee}>Check in</button>
          </div>
        </div>
      </section>

      <section className='tableSection'>
        <h1 style={{fontSize: "25px"}}>Attendees List</h1>
        <div className='tableinputSearch'>
          <input type="text" placeholder='search attendee by name or phone number' className='searchInput'/>
          <IoSearch />
        </div>
        
        <div className='table-bg'>
              <div className='body'>
                <table>
                  <thead>
                    <tr>
                      <th>Attendee name</th>
                      <th>Attendee email address</th>
                      <th>Checked-in</th>
                      <th>Seat/table no</th>
                      <th>Car access</th>
                      <th>Checked-in</th>
                      <th>Ticket Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      filteredAttendee.map((e,i) => (
                        <tr key={e._id}>
                      <td>{e.name}</td>
                      <td>{}</td>
                      <td>AB89</td>
                      <td>Table1Seat3</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>VIP</td>
                    </tr>  
                      ))
                    }
                    
                    {/* <tr>
                      <td>Ahmed Davies</td>
                      <td>ahmedavis@gmail.com</td>
                      <td>AB89</td>
                      <td>Table1Seat3</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>VIP</td>
                    </tr>  
                    <tr>
                      <td>Ahmed Davies</td>
                      <td>ahmedavis@gmail.com</td>
                      <td>AB89</td>
                      <td>Table1Seat3</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>VIP</td>
                    </tr>  
                    <tr>
                      <td>Ahmed Davies</td>
                      <td>ahmedavis@gmail.com</td>
                      <td>AB89</td>
                      <td>Table1Seat3</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>VIP</td>
                    </tr>   */}
                  </tbody>
                </table>

                <div className='seemoreDiv'>
                  <p>see more</p>
                  <HiOutlineArrowRight  style={{cursor: "pointer"}}/>
                </div>
              </div>
            </div>
       
        
      </section>
    </div>
  )
}

export default CheckIn

