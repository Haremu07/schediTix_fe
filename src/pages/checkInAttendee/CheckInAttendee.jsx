import React, { useEffect, useState } from "react";
import "./checkInAttendee.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import { Dropdown } from "antd";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckInAttendee = () => {
  const navigate = useNavigate();

  const BASEURL = "https://scheditix.onrender.com";

  const [allEvent, setAllEvent] = useState([])
  const [search, setSearch] = useState("")
  const [theId, setTheId] = useState("")



  useEffect(() => {
    const handleEvent = async() => {
      try {
        const res = await axios.get(`${BASEURL}/api/v1/events`)
        // console.log(res)
        setAllEvent(res?.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    handleEvent()
  },[])

  const filteredEvents = allEvent.filter((event) =>
    event.eventTitle.toLowerCase().includes(search.toLowerCase())
  );
  const items = [
    {
      label: (
        <p onClick={() => navigate("/dashboard/view-event-attendee")}>
          View Event
        </p>
      ),
      key: '0',
    },
    {
      label: (
        <p onClick={() => navigate(`/dashboard/check-in/${theId}`)}>
          Check In
        </p>
      ),
      key: '1',
    },
 
  
  ]

  return (
    <div className="checkInAttendee">
      <nav className="checkInAttendee__nav">
        <p style={{ color: "black" }}>
          <b className="tr">All events</b>
        </p>
        <p className="tr">upcoming events</p>
        <p className="tr">ongoing event</p>
        <p className="tr">ended event</p>
       
      </nav>
      <div>
      <input
          type="text"
          placeholder="search for event"
          className="navInpit"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-bg1">
        <nav className="table">
          <section className="rows">
            <div className="medalandtitleHeader">
              <p className="yt">Media/Title</p>
            </div>
            <p className="yt">Date&Time</p>
            <p className="yt">Tickets(sold)</p>
            <p className="yt">Revenue</p>
            <p className="yt">Status</p>
            <p className="yt">Actions</p>
          </section>

            {
              filteredEvents.length === 0 ? (<p style={{display: "flex", alignItems: "center", justifyContent: "center"}}>No event!</p>) : (
             filteredEvents.map((event, index) => (
          <section className="rows" key={index}>
            <div className="medalandtitle" >
              <nav className="profile">
                <img src={event?.image.imageUrl} alt="" className="yx"/>
              </nav>
              <p className="yx"> {event.eventTitle}</p>
            </div>
            <p className="yx">{event.startDate} - {event.startTime}</p>
            <p className="yx">{event.ticketQuantity} {(event.ticketSold)}</p>
            <p className="yx">#{event.revenueGenerated}</p>
            <div className="status">
              <p className="yx" style={{color:" rgb(250, 250, 250)"}}>{event.status}</p>
            </div>
            <p className="dot">
              {/* <PiDotsThreeOutlineFill style={{cursor: "pointer"}} onClick={handleToggle}/> */}
              <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => {e.preventDefault(); setTheId(event._id)}}/>
              </Dropdown>
            </p>

          </section>
            ))
          )
            }

          {/* <section className="rows">
            <div className="medalandtitle">
              <nav className="profile">
                <img src={profile2} alt="" />
              </nav>
              <p>Laugh with MC wire-wire 1.0</p>
            </div>
            <p>24/04/2025 - 11:00am</p>
            <p>350 (220)</p>
            <p>N2,450,000</p>
            <div className="statusUpgoing">
              <p>Ongoing</p>
            </div>
            <p className="dot">
            <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => e.preventDefault()}/>
              </Dropdown>
            </p>
          </section>

          <section className="rows">
            <div className="medalandtitle">
              <nav className="profile">
                <img src={profile3} alt="" />
              </nav>
              <p>Lagos Tradefair 2025</p>
            </div>
            <p>24/04/2025 - 11:00am</p>
            <p>350 (220)</p>
            <p>N2,450,000</p>
            <div className="statusUpgoing">
              <p>0ngoing</p>
            </div>
            <p className="dot">
            <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => e.preventDefault()}/>
              </Dropdown>
            </p>
          </section>

          <section className="rows">
            <div className="medalandtitle">
              <nav className="profile">
                <img src={profile4} alt="" />
              </nav>
              <p>MC Savio Comedy Show</p>
            </div>
            <p>24/04/2025 - 11:00am</p>
            <p>350 (220)</p>
            <p>N2,450,000</p>
            <div className="statusend">
              <p>ended</p>
            </div>
            <p className="dot">
            <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => e.preventDefault()}/>
              </Dropdown>
            </p>
          </section>

          <section className="rows">
            <div className="medalandtitle">
              <nav className="profile">
                <img src={profile5} alt="" />
              </nav>
              <p>Ajegunle city youth marathon</p>
            </div>
            <p>24/04/2025 - 11:00am</p>
            <p>350 (220)</p>
            <p>N2,450,000</p>
            <div className="statusend">
              <p>ended</p>
            </div>
            <p className="dot">
            <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => e.preventDefault()}/>
              </Dropdown>
            </p>
          </section>

          <section className="rows">
            <div className="medalandtitle">
              <nav className="profile">
                <img src={profile1} alt="" />
              </nav>
              <p>Ajegunle city youth marathon</p>
            </div>
            <p>24/04/2025 - 11:00am</p>
            <p>350 (220)</p>
            <p>N2,450,000</p>
            <div className="status">
              <p>ongoing</p>
            </div>
            <p className="dot">
            <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => e.preventDefault()}/>
              </Dropdown>
            </p>
          </section> */}
        </nav>

        <div className="Checkinpagination-bg">
          <div className="pagination-wrapper">
            <p className="arrow">
              <IoIosArrowBack />
            </p>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <p className="dot">
            <Dropdown
             menu={{ items }} trigger={["click"]}
             >
                <CiMenuKebab style={{cursor: "pointer"}}  />
              </Dropdown>
            </p>
            <div className="num">10</div>
            <p className="arrow">
              <IoIosArrowForward />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInAttendee;
