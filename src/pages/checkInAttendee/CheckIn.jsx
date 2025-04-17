import "./checkIn.css"
import { IoSearch } from "react-icons/io5";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CheckIn = () => {
  const navigate = useNavigate();
  return (
    <div className="mainPage">
      <div className="mainPageHeader" onClick={() => navigate("/dashboard/checkin")}>
      <IoChevronBack size={30} style={{cursor: "pointer"}} /> <p>back</p>
      </div>
      <section className='upperSection'>
        <div className='cardDiv'>
          <article className='imgCard'>
            <img src="" alt=""  />
          </article>

          <div className='textCard'>
          <p className='h1'>Rah1hChi love story</p>
          <p>City hall, Maldives.</p>
          <div className='dateAndTime'>
            <p>April 2, 2025</p>
            <p>10am prompt</p>
          </div>
          
          <div className='sumNumbers'>
              <section className='sumOfAttendees'>
                <h1 style={{fontSize: "15px"}}>200</h1>
                <p>Attendee</p>
              </section>
              <section className='sumTicketSold'>
                <h1 style={{fontSize: "15px"}}>200</h1>
                <p>Attendee</p>
              </section>
          </div>
        </div>
        </div>

        <div className='checkinDiv'>
          <h1 style={{fontSize: "20px"}}>Enter attendee code to check in</h1>
          <div className='checkinInput'>
            <input type="text" placeholder='enter code' className='chekinInput'/>
            <button className='checkinButton'>Check in</button>
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
                    </tr>  
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

