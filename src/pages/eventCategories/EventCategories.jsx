import React, { useEffect, useState } from 'react';
import "./eventCategories.css";
import EventForYou from './EventForYou';
import StayinLoop from './StayinLoop';
import FeatureComp from './FeatureComp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventCategories = () => {
  const navigate = useNavigate();
  const [activeCategoyId, setActiveCategoryId] = useState('All Events'); 
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const BASEURL = "https://scheditix.onrender.com";

  const handleCategories = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/v1/allCategories`);
      setCategories(response?.data.data);
      console.log("Available categories", response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/v1/events`);
      setEvents(response.data.data);
      console.log("All events fetched:", response.data.data);
    } catch (error) {
      console.log("Error fetching all events:", error);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    if (categoryId === 'All Events') {
      fetchAllEvents();
    } else {
      const getEvents = categories.find(cat => cat.categoryName === categoryId);
      setEvents(getEvents?.events || []);
    }
  };

  useEffect(() => {
    handleCategories();
    fetchAllEvents(); // Fetch all events on initial render
  }, []);

  return (
    <div className="MainPageEventCategories">
      <div className='topBox'></div>
      <div className='LandingPageEventCategories'>
        <nav className='middleBoxEventCategories'>
          <section className='middleTop'>
            <h4>Shows</h4>
          </section>

          <section className='middleCenter' style={{ cursor: "pointer" }}>
            <div
              className={`listOfShowsBox ${activeCategoyId === 'All Events' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('All Events')}
              style={{ backgroundColor: activeCategoyId === 'All Events' ? "rgba(39, 24, 126, 1)" : "white", color: activeCategoyId === 'All Events' ? "white" : "rgba(50, 50, 50, 1)", border: activeCategoyId === 'All Events' && "none" }}
            >
              <p>All Events</p>
            </div>
            {categories?.map((category, index) => (
              <div
                className={`listOfShowsBox ${activeCategoyId === category.categoryName ? 'active' : ''}`}
                key={index}
                onClick={() => handleCategoryClick(category.categoryName)}
                style={{ backgroundColor: activeCategoyId === category.categoryName ? "rgba(39, 24, 126, 1)" : "white", color: activeCategoyId === category.categoryName ? "white" : "rgba(50, 50, 50, 1)", border: activeCategoyId === category.categoryName && "none" }}
              >
                <p>{category.categoryName}</p>
              </div>
            ))}
          </section>

          <section className='middleBottom'>
            {events?.length === 0 ? (
              <div className='noEvent'>There are no events yet</div>
            ) : (
              events?.map((item, index) => (
                <article className='middleBottomCards' key={index}>
                  <img src={item.image?.imageUrl} alt={item.eventTitle} />
                  <div className='radientBlackBox'>
                    <nav className='middleBox'>
                      <p>{item.eventTitle}</p>
                      <p className='Categorylocation'>{item.eventLocation}</p >
                      <div className='seeMoreButton'>
                        <p
                          onClick={() => navigate(`/event-details/${item._id}`)}
                        >See More</p>
                      </div>
                    </nav>
                  </div>
                </article>
              ))
            )}
          </section>
        </nav>
      </div>
      <div style={{ width: "100%", height: "10vh", backgroundColor: "#edecf4" }} className='buttom'></div>
      <FeatureComp />
      <EventForYou />
      <StayinLoop />
    </div>
  );
};

export default EventCategories;