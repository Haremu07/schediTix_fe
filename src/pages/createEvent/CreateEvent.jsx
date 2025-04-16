import React, { useEffect, useState } from "react";
import "../createEvent/createEvent.css";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
// import {  IoIosArrowBack } from "react-icons/io";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "antd";
import "../createEvent/publish.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
// import { Modal } from 'antd';
import { VscVerifiedFilled } from "react-icons/vsc";
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';


const CreateEvent = () => {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const [isModalOpens, setIsModalOpens] = useState(false);
  const showModals = () => {
    setIsModalOpens(true);
  };
  const timeout = () => {
    setTimeout(() => {
      setIsModalOpens(false);
    }, 2000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const [input, setInput] = useState({
    eventTitle: "",
    eventDescription: "",
    endTime: "",
    startTime: "",
    eventAgenda: "",
    eventRule: "",
    startDate: "",
    endDate: "",
    eventLocation: "",
    totalTableNumber: "",
    totalSeatNumber: "",
    image: "",
    packingInfo: "",
    ticketPrice: "",
    ticketQuality: "",
    ticketLimit: ""
  });

  const [disable, setDisable] = useState(false)

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const handleCategories = async () => {
    try {
      const res = await axios.get(`${BASEURL}/api/v1/allCategories`);
      console.log(res);
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const BASEURL = "https://scheditix.onrender.com";

  const handleSubmit = async () => {
    try {
    
      const response = await axios.post(`${BASEURL}/api/v1/category`);
      console.log(response);
      setIsLoading(true)
      // setDisable(true)
      toast.success("E clear!!!")
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(true)
      if( !eventTitle){
        toast.error("Please fill in all fields")
      }
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="create-event-bg">
      <Toaster/>
      <div className="create-event-wrapper">
        <div className="create-event-title"></div>
        <div className="upload-img-wrapper">
          <div className="upload-img-title" >
            <div className="holder-nav">
              <p className="arrow-back" onClick={() => nav(-1)}>
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
                
                {profileImage ? (
                  <img src={profileImage} className="UploadImgBox" alt="" />
                ) : (
                  <div>
                    <div
                      className="upload-img-template-details-text-bg"
                      onSubmit={handleSubmit}
                    >
                      <h2>
                        Drag & Drop{" "}
                        <span style={{ color: "rgb(255,87,34)" }}>images</span>,{" "}
                        <span style={{ color: "rgb(255,87,34)" }}>Videos</span>{" "}
                        or any{" "}
                        <span style={{ color: "rgb(255,87,34)" }}>file</span>
                      </h2>
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
                name="image"
                value={input.image}
                // onChange={{handleFileChange, handleChange}}
                // style={{ display: "none" }}
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
                name="eventTitle"
                value={input.eventTitle}
                onChange={handleChange}
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
                name="eventDescription"
                value={input.eventDescription}
                onChange={handleChange}
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

                <select
                  placeholder="select a category that descibes for your event"
                  className="describe-category"
                >
                  <option value="">Select a category</option>
                  {categories.map((e) => (
                    <option value="">{e.categoryName}</option>
                  ))}
                </select>
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
                    name="eventLocation"
                    value={input.eventLocation}
                    onChange={handleChange}
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
                      name="startDate"
                      value={input.startDate}
                      onChange={handleChange}
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
                      name="startTime"
                      value={input.startTime}
                      onChange={handleChange}
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
                      name="endDate"
                      value={input.endDate}
                      onChange={handleChange}
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
                      name="endTime"
                      value={input.endTime}
                      onChange={handleChange}
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
                  name="eventAgenda"
                  value={input.eventAgenda}
                  onChange={handleChange}
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
                  name="eventRule"
                  value={input.eventRule}
                  onChange={handleChange}
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
                      name="totalTableNumber"
                      value={input.totalTableNumber}
                      onChange={handleChange}
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
                      name="totalSeatNumber"
                      value={input.totalSeatNumber}
                      onChange={handleChange}
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
                      name="packingInfo"
                      value={input.packingInfo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                  <Modal
                    title=""
                    open={isModalOpen}
                    // onOk={handleOk}
                    onCancel={handleCancel}
                    // className="ModalBody"
                    // style={{width: "80%"}}
                    height={50}
                    width={"70%"}
                    okButtonProps={ { hidden:true,style:{display:"none"}}}
                    // cancelButtonProps={ { hidden:true,style:{display:"none"}}}
                     closeIcon={false}
                  >
                    <div className="publish-bg">
                      <div className="publish-wrapper">
                        <div className="publish-title">
                          <div className="publish-holder-nav">
                            {/* <p
                              className="arrow-back"
                              onClick={() =>
                                navigate("/dashboard/create-event")
                              }
                            >
                              <IoIosArrowBack />
                            </p> */}
                            <h3>
                              Create event -{" "}
                              <span style={{ color: "rgb(255,128,88)" }}>
                                Add ticket
                              </span>{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="publish-wrapper-two">
                          <div className="publish-wrapper-two-title">
                            <h3>we don't charge for free ticket</h3>
                          </div>
                          <div className="publish-wrapper-two-double-bg">
                            <div className="publish-wrapper-two-double-div-one">
                              <div className="publish-first-box">
                                <div>
                                  <h3>Ticket Price</h3>
                                </div>
                                <div>
                                  <p>Set the price for this ticket</p>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    placeholder="e.g.,550 / #10,000"
                                    className="publish-input"
                                    // min={0}
                                    name="ticketPrice"
                                    value={input.ticketPrice}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="publish-wrapper-two-double-div-one">
                              <div className="publish-first-box">
                                <div>
                                  <h3>Ticket Quality</h3>
                                </div>
                                <div>
                                  <p>
                                    How many of this ticket are available for
                                    sale?
                                  </p>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    placeholder="e.g.,300"
                                    className="publish-input"
                                    // min={0}
                                  name="ticketQuality"
                                  value={input.ticketQuality}
                                  onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="publish-wrapper-single-double-bg">
                            <div className="publish-third-box">
                              <div>
                                <h3>Ticket Purchase limit</h3>
                              </div>
                              <div>
                                <p>Set this ticket purchase limit</p>
                              </div>
                              <div>
                                <input
                                  type="number"
                                  placeholder="e.g.,3"
                                  className="publish-third-input"
                                  // min={0}
                                  name="ticketLimit"
                                  value={input.ticketLimit}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="quick-reminder-bg">
                            <div className="quick-reminder-wrapper">
                              <div className="quick-reminder-title-wrapper">
                                <p className="warning-icon">
                                  <IoWarning />
                                </p>
                                <h2 className="warning-texts">
                                  Quick Reminder:
                                </h2>
                              </div>
                              <div className="quick-reminder-text-wrapper">
                                <h4 className="quick-reminder-text-wrapper-text">
                                  You're only allowed to make changes to the
                                  event date 📆, time ⏱, and location 📍 .{" "}
                                  <br /> All other event details are locked in
                                  once the event goes live. Make sure everything
                                  else looks good before publishing !
                                </h4>
                              </div>
                            </div>
                            <Modal
                              open={isModalOpens}
                              okButtonProps={{ style: { display: "none" } }}
                              cancelButtonProps={{ style: { display: "none" } }}
                              closable={false}
                            >
                              <div className="success-bg">
                                <div className="verified-icon-holder">
                                  <VscVerifiedFilled className="verified-icon" />
                                </div>
                                <div className="successful-text-holder">
                                  <h3 className="successful-text">
                                    Congratulations on successfully creating an
                                    event!!
                                  </h3>
                                </div>
                              </div>
                            </Modal>
                            <div className="publish-event-btn-bg">
                          {
                            isLoading ? ("loading...") : (
                              <button
                              className="publish-event-btn"
                              onClick={() => {
                                // if(response.status !== 200)
                                //   toast.error("e no wrk"}
                                setIsLoading(true)
                               setTimeout(() => {
                                timeout();
                                showModals();
                                setIsLoading(false)
                               }, 3000)
                              }}
                              type="submit"
                            >
                              Publish Event
                            </button>
                            ) 
                          }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                
                <div className="parking-btn-wrapper">
                  {/* <Outlet /> */}
                  <button
                    className="parking-btn"
                    onClick={showModal}
                    // onClick={() => nav("/dashboard/create-event/publish")}
                    // onClick={handleCreate}
                  >
                    Next
                  </button>
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
