import React, { useState } from "react";
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

const CheckInAttendee = () => {
  
  const navigate = useNavigate();

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
        <p onClick={() => navigate("/dashboard/check-in")}>
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
          <b>All events</b>
        </p>
        <p>upcoming events</p>
        <p>ongoing event</p>
        <p>ended event</p>
        <input
          type="text"
          placeholder="search for event"
          className="navInpit"
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
              <p>Ongoing</p>
            </div>
            <p className="dot">
              {/* <PiDotsThreeOutlineFill style={{cursor: "pointer"}} onClick={handleToggle}/> */}
              <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => e.preventDefault()}/>
              </Dropdown>
            </p>
          </section>

          <section className="rows">
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
          </section>
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
            <Dropdown menu={{ items }} trigger={["click"]}>
                <CiMenuKebab style={{cursor: "pointer"}} onClick={(e) => e.preventDefault()}/>
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
