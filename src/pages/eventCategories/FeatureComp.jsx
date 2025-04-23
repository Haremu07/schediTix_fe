import React, { useState } from 'react';
import './eventCategories.css';
import { MdLocationOn } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import vector from '../../assets/Vector.png';
import { useNavigate } from 'react-router-dom';

const FeatureComp = ({ events = [], loading }) => {
  const [likedEvents, setLikedEvents] = useState({});

  const formatNaira = (amount) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount || 0);

  const toggleLike = (id) => {
    setLikedEvents((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navigate = useNavigate()
  return (
    <div className="featureCamp">
      <nav className="paddingBox">
        <div className="combine">
          <p>Feature Event</p>
          <img src={vector} alt="" className="vectorImg" />
        </div>

        <div className="cardMainBox">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="custom-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-line short"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            ))
          ) : events.length === 0 ? (
            <p>No featured events in this category yet.</p>
          ) : (
            events.map((item, index) => (
              <section key={index} className="FeturesCards">
                <div className="imageBox">
                  <CiHeart
                    className="favoriteIcon"
                    onClick={() => toggleLike(item._id)}
                    style={{
                      color: likedEvents[item._id] ? 'red' : '#fff',
                      cursor: 'pointer',
                    }}
                  />
                  {item?.image?.imageUrl ? (
                    <img src={item.image.imageUrl} alt={item.eventTitle || 'Event Image'} />
                  ) : (
                    <div style={{ height: '200px', backgroundColor: '#ccc' }}>No Image</div>
                  )}
                </div>

                <nav className="cardFirsBox">
                  <p>{item.eventTitle || 'Untitled Event'}</p>
                  <div>
                    <h3>{item.startDate || 'No Date'}</h3>
                  </div>
                </nav>

                <nav className="cardSecondBox">
                  {item.eventDescription
                    ? `${item.eventDescription.slice(0, 85)}...`
                    : 'No description available.'}
                </nav>

                <nav className="address">
                  <MdLocationOn className="location" />
                  <p>{item.eventLocation || 'Unknown Location'}</p>
                </nav>

                <nav className="cardThirdBox">
                  <p>{formatNaira(item.ticketPrice)}</p>
                  <span className="buyTicketP"  onClick={()=> navigate(`/dashboard/purchase-details/${item?._id}`)}>Buy Tickets</span>
                </nav>
              </section>
            ))
          )}
        </div>
      </nav>
    </div>
  );
};

export default FeatureComp;
