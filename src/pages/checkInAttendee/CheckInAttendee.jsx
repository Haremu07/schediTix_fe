import React, { useEffect, useState } from "react";
import "./checkInAttendee.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Dropdown } from "antd";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckInAttendee = () => {
  const navigate = useNavigate();
  const BASEURL = "https://scheditix.onrender.com";

  const [myEvents, setMyEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [theId, setTheId] = useState("");

  const getUserId = () => {
    const userData = localStorage.getItem("userData");
    if (!userData) return null;

    try {
      const parsedUser = JSON.parse(userData);
      return parsedUser._id || null;
    } catch (error) {
      console.error("Failed to parse user data:", error);
      return null;
    }
  };

  const userId = getUserId();

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const res = await axios.get(`${BASEURL}/api/v1/getPlannerEvent/${userId}`);
        setMyEvents(res?.data?.data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    if (userId) fetchUserEvents();
  }, [userId]);

  const filteredEvents = myEvents.filter((event) =>
    event.eventTitle.toLowerCase().includes(search.toLowerCase())
  );

  const items = [
    {
      label: (
        <p onClick={() => navigate("/dashboard/view-event-attendee")}>
          View Event
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <p onClick={() => navigate(`/dashboard/check-in/${theId}`)}>
          Check In
        </p>
      ),
      key: "1",
    },
  ];

  return (
    <div className="checkInAttendee">
      <nav className="checkInAttendee__nav">
        <p style={{ color: "black" }}>
          <b>All events</b>
        </p>
        <p>Upcoming events</p>
        <p>Ongoing event</p>
        <p>Ended event</p>
        <input
          type="text"
          placeholder="Search for event"
          className="navInpit"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div className="table-bg1">
        <nav className="table">
          <section className="rows">
            <div className="medalandtitleHeader">
              <p>Media / Title</p>
            </div>
            <p>Date & Time</p>
            <p>Tickets(sold)</p>
            <p>Revenue</p>
            <p>Status</p>
            <p>Actions</p>
          </section>

          {filteredEvents.length === 0 ? (
            <p style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              No event!
            </p>
          ) : (
            filteredEvents.map((event, index) => (
              <>
              <section className="rows" key={index}>
                <div className="medalandtitle">
                  <nav className="profile">
                    <img src={event?.image?.imageUrl} alt="event" />
                  </nav>
                  <p>{event?.eventTitle}</p>
                  </div>
                <div>
                <p>{event?.startDate} - {event.startTime}</p>
                <p>{event.ticketQuantity} ({event.ticketSold || 0})</p>
                <p>#{event?.revenueGenerated || 0}</p>
                {/* <div className={status ${event.status}}> */}
                  <p>{event.status}</p>
                </div>
                <p className="dot">
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <CiMenuKebab
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setTheId(event._id);
                      }}
                    />
                  </Dropdown>
                </p>
              </section>
              </>

            ))
          )}
        </nav>

        {/* Optional pagination layout */}
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
            <div className="dot">...</div>
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