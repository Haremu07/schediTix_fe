import React, { useState, useEffect } from 'react';
import './eventCategories.css';
import { MdLocationOn } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import vector from '../../assets/Vector.png';

const FeatureComp = ({ events = [], loading }) => {
  const [shuffledEvents, setShuffledEvents] = useState([]);
  const [likedEvents, setLikedEvents] = useState({}); // Store liked state

  const formatNaira = (amount) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount || 0);

  // Shuffle events when received
  useEffect(() => {
    if (!Array.isArray(events) || events.length === 0) {
      setShuffledEvents([]);
      return;
    }

    const shuffled = [...events];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledEvents(shuffled);
  }, [events]);

  // Toggle like
  const toggleLike = (id) => {
    setLikedEvents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
          ) : shuffledEvents.length === 0 ? (
            <p>No featured events in this category yet.</p>
          ) : (
            shuffledEvents.map((item, index) => (
              <section key={index} className="FeturesCards">
                <div className="imageBox">
                  <CiHeart
                    className="favoriteIcon"
                    onClick={() => toggleLike(item._id)}
                    style={{ color: likedEvents[item._id] ? 'red' : '#fff', cursor: 'pointer' }}
                  />
                  {item?.image?.imageUrl ? (
                    <img src={item.image.imageUrl} alt={item.eventTitle || "Event Image"} />
                  ) : (
                    <div style={{ height: '200px', backgroundColor: '#ccc' }}>No Image</div>
                  )}
                </div>

                <nav className="cardFirsBox">
                  <p>{item.eventTitle || "Untitled Event"}</p>
                  <div>
                    <h3>{item.startDate || "No Date"}</h3>
                  </div>
                </nav>

                <nav className="cardSecondBox">
                  {item.eventDescription
                    ? `${item.eventDescription.slice(0, 85)}...`
                    : "No description available."}
                </nav>

                <nav className="address">
                  <MdLocationOn className="location" />
                  <p>{item.eventLocation || "Unknown Location"}</p>
                </nav>

                <nav className="cardThirdBox">
                  <p>{formatNaira(item.ticketPrice)}</p>
                  <span className="buyTicketP">Buy Tickets</span>
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
