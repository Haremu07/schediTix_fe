import React, { useEffect, useState } from 'react';
import './eventCategories.css';
import EventForYou from './EventForYou';
import StayinLoop from './StayinLoop';
import FeatureComp from './FeatureComp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventCategories = () => {
  const [loading, setLoading] = useState(false); 
  const [activeCategoyId, setActiveCategoryId] = useState('All Events');
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const BASEURL = "https://scheditix.onrender.com"; 
  const navigate = useNavigate();

  const handleCategories = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(`${BASEURL}/api/v1/allCategories`);
      setCategories(response?.data.data);
      console.log("Available categories:", response?.data.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    } finally {
      setLoading(false); 
    }
  };

  const fetchAllEvents = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(`${BASEURL}/api/v1/events`);
      setEvents(response.data.data);
      console.log("All events fetched:", response.data.data);
    } catch (error) {
      console.log("Error fetching all events:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    setLoading(true); 

    if (categoryId === 'All Events') {
      fetchAllEvents();
    } else {
      const selectedCategory = categories.find((cat) => cat.categoryName === categoryId);
      setEvents(selectedCategory?.events || []);
      setLoading(false); 
    }
  };

  useEffect(() => {
    handleCategories();
    fetchAllEvents(); 
  }, []);
    
  return (
    <div className="MainPageEventCategories">
      <div className='topBox'></div>
      <div className='LandingPageEventCategories'>
        <nav className='middleBoxEventCategories'>
          <section className='middleTop'>
            <h4>Shows</h4>
          </section>

          <section className='middleCenter' style={{ cursor: 'pointer' }}>
            <div
              className={`listOfShowsBox ${activeCategoyId === 'All Events' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('All Events')}
              style={{
                backgroundColor: activeCategoyId === 'All Events' ? 'rgba(39, 24, 126, 1)' : 'white',
                color: activeCategoyId === 'All Events' ? 'white' : 'rgba(50, 50, 50, 1)',
                border: activeCategoyId === 'All Events' && 'none',
              }}
            >
              <p>All Events</p>
            </div>
            {categories?.map((category, index) => (
              <div
                className={`listOfShowsBox ${activeCategoyId === category.categoryName ? 'active' : ''}`}
                key={index}
                onClick={() => handleCategoryClick(category.categoryName)}
                style={{
                  backgroundColor: activeCategoyId === category.categoryName ? 'rgba(39, 24, 126, 1)' : 'white',
                  color: activeCategoyId === category.categoryName ? 'white' : 'rgba(50, 50, 50, 1)',
                  border: activeCategoyId === category.categoryName && 'none',
                }}
              >
                <p>{category.categoryName}</p>
              </div>
            ))}
          </section>

          {/* Loading State for Events */}
          <section className='middleBottom'>
  {loading ? (
    Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className='custom-skeleton'>
        <div className='skeleton-image'></div>
        <div className='skeleton-line short'></div>
        <div className='skeleton-line'></div>
        <div className='skeleton-line'></div>
      </div>
    ))
  ) : events?.length === 0 ? (
    <div className='noEvent'>There are no events yet</div>
  ) : (
    events.slice(0,5).sort((a, b)=>b-a)?.map((item, index) => (
      <article className='middleBottomCards' key={index}>
        <img src={item.image?.imageUrl} alt={item.eventTitle} />
        <div className='radientBlackBox'>
          <nav className='middleBox'>
            <p>{item.eventTitle}</p>
            <p className='Categorylocation'>{item.eventLocation}</p>
            <div className='seeMoreButton'>
              <p onClick={() => navigate(`/event-details/${item._id}`)}>See More</p>
            </div>
          </nav>
        </div>
      </article>
    ))
  )}
</section>

        </nav>
      </div>
      <div style={{ width: '100%', height: '10vh', backgroundColor: '#edecf4' }} className='buttom'></div>

      {/* Pass activeCategoyId as a prop to FeatureComp */}
      <FeatureComp events={events} loading={loading} />
      <EventForYou />
      <StayinLoop />
    </div>
  );
};

export default EventCategories;