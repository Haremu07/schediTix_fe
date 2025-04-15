import React, { useState } from "react";
import "../createEvent/createEvent.css";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [profileImage, setProfileImage] = useState(null);
  const nav = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  return (
    <div className="create-event-bg">
      <div className="create-event-wrapper">
        <div className="create-event-title"></div>
        <div className="upload-img-wrapper">
          <div className="upload-img-title">
            <div className="holder-nav">
              <p className="arrow-back">
                <IoIosArrowBack />
              </p>
              <h3 className="text-after-arrow-back">
                <span style={{ color: "rgb(255,128,88)" }}>Create event</span> -
                Add ticket
              </h3>
            </div>
          </div>
          <div className="upload-img-title">
            <h3>Add event media (image, video, flyer etc)</h3>
          </div>
          <div className="upload-img-card">
            <div className="upload-img-template">
              <label
                htmlFor="Upload-img-input"
                className="upload-img-template-details-wrapper"
              >
                {/* <div className='upload-img-template-details-icon-bg'>
                        <div className='upload-img-template-details-icon-wrapper'></div>
                    </div> */}
                {profileImage ? (
                  <img src={profileImage} className="UploadImgBox" alt="" />
                ) : (
                  <div>
                    <div className="upload-img-template-details-text-bg">
                      <h1>
                        Drag & Drop{" "}
                        <span style={{ color: "rgb(255,87,34)" }}>images</span>,{" "}
                        <span style={{ color: "rgb(255,87,34)" }}>Videos</span>{" "}
                        or any{" "}
                        <span style={{ color: "rgb(255,87,34)" }}>file</span>
                      </h1>
                    </div>
                    <div className="upload-img-template-details-subtext-bg">
                      <p>
                        Or upload files from{" "}
                        <span style={{ color: "rgb(255, 150, 114)" }}>
                          computer
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </label>
            </div>
            <div className="upload-img-btn">
                      <input
                type="file"
                id="Upload-img-input"
                onChange={handleFileChange}

                style={{ display: "none" }}
                onClick={handleFileChange}

              />
              <h5 className="text-btn">Upload files</h5>
            </div>
          </div>
        </div>
        <div className="input-bg">
          <div className="input-wrapper">
            <div className="input-holder">
              <div className="event-title">
                <h4>Event title</h4>
              </div>
              <div className="catchy">
                <p>Give your event a catchy name</p>
              </div>
              <input
                type="text"
                placeholder="enter event name e.g, Tech Hack 2025"
                className="inputs"
              />
            </div>
            <div className="input-holder">
              <div className="event-title">
                <h4>Event description</h4>
              </div>
              <div className="catchy">
                <p>Briefly describe your event</p>
              </div>
              <input
                type="text"
                placeholder="e.g, A night of music, dance & culture!"
                className="inputs"
              />
            </div>
            <div className="double-input-holder">
              <div className="event-category-div">
                <div className="event-category">
                  <h4>Event Category</h4>
                </div>
                <div className="catchy">
                  <p>Choose a category for better visibility</p>
                </div>
                <div className="double-inputs-category">
                  <div className="describe-category">
                    <h4>select a category that descibes for your event</h4>
                  </div>
                  <div className="arrow-down">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>

              <div className="event-category-div">
                <div className="event-location">
                  <h4>Add event location</h4>
                </div>
                <div className="catchy">
                  <p>Enter the venue or online link</p>
                </div>
                <div className="double-inputs-location">
                  <div className="location-icons">
                    <MdLocationOn />
                  </div>
                  <input
                    type="text"
                    placeholder="mghtysolomon@gmail.com"
                    className="location-input"
                  />
                </div>
              </div>
            </div>

            <div className="Four-input-bg">
              <div className="text-holder">
                <div className="start">
                  <h3>Add event start date & time</h3>
                  <p>select event start date & time</p>
                </div>
                <div className="start">
                  <h3>Add event end date & time</h3>
                  <p>select event end date & time</p>
                </div>
              </div>
              <div className="Four-input-wrapper">
                <div className="input-one-holder">
                  <div className="calendar-icon">
                    <FaCalendarAlt />
                  </div>
                  <div className="time-input">
                    <input
                      className="input-time"
                      type="text"
                      placeholder="select start date"
                    />
                  </div>
                </div>
                <div className="input-one-holder">
                  <div className="calendar-icon">
                    <FaClock />
                  </div>
                  <div className="time-input">
                    <input
                      className="input-time"
                      type="text"
                      placeholder="select start time"
                    />
                  </div>
                </div>
                <div className="input-one-holder">
                  <div className="calendar-icon">
                    <FaCalendarAlt />
                  </div>
                  <div className="time-input">
                    <input
                      className="input-time"
                      type="text"
                      placeholder="select end date"
                    />
                  </div>
                </div>
                <div className="input-one-holder">
                  <div className="calendar-icon">
                    <FaClock />
                  </div>
                  <div className="time-input">
                    <input
                      className="input-time"
                      type="text"
                      placeholder="select end time"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wider-bg">
            <div className="event-agenda-wrapper">
              <div className="event-agenda-holder">
                <h3>Event Agenda</h3>
              </div>
              <div className="event-agenda-text-holder">
                <p>Outline key activities or sessions of your event</p>
              </div>
              <div className="wider-input-div">
                <textarea
                  type="text"
                  placeholder="write "
                  className="wider-input"
                />
              </div>
            </div>
            <div className="event-agenda-wrapper">
              <div className="event-agenda-holder">
                <h3>Event Rules</h3>
              </div>
              <div className="event-agenda-text-holder">
                <p>List any event guidelines</p>
              </div>
              <div className="wider-input-div">
                <textarea
                  type="text"
                  placeholder="e.g, NO smoking, Dress code: Formal "
                  className="wider-input"
                />
              </div>
            </div>
          </div>
          <div className="finally-input-bg">
            <div className="finally-input-wrapper">
              <div className="finally-double-input-wrapper">
                <div className="finally-box">
                  <div>
                    <h3>Tables</h3>
                  </div>
                  <div>
                    <p>Set the total numbers of tables for this ticket</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="e.g.,50"
                      className="finally-input"
                    />
                  </div>
                </div>
                <div className="finally-box">
                  <div>
                    <h3>Seats</h3>
                  </div>
                  <div>
                    <p>Set the total numbers of seats for this ticket</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="e.g.,300"
                      className="finally-input"
                    />
                  </div>
                </div>
              </div>
              <div className="finally-single-input-wrapper">
                <div className="finally-single-input-holder">
                  <div>
                    <h3>Parking info</h3>
                  </div>
                  <div>
                    <p>Provide parking details if available</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="e.g., No smoking., Free parking available for VIPsg, Dress code: Formal"
                      className="parking-input"
                    />
                  </div>
                </div>
                <div className="parking-btn-wrapper">
                  <Outlet />
                  <button className="parking-btn" onClick={()=> nav('/dashboard/create-event/publish')}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
