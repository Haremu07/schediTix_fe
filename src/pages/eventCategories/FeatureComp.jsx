import React from 'react';
import './eventCategories.css';
import { MdLocationOn } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import vector from '../../assets/Vector.png';


const FeatureComp = ({ events, loading }) => {
  const formatNaira = (amount) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="featureCamp">
      <nav className="paddingBox">
        <div className="combine">
          <p>Feature Event</p>
          <img src={vector} alt="" className="vectorImg" />
        </div>

        <div className="cardMainBox">
          {loading ? (
            // 👇 Custom skeleton loader while loading
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="custom-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-line short"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            ))
          ) : events?.length === 0 ? (
            <p>No featured events in this category yet.</p>
          ) : (
            events?.map((item, index) => (
              <section key={index} className="FeturesCards">
                <div className="imageBox">
                  <CiHeart className="favoriteIcon" />
                  <img src={item?.image?.imageUrl} alt={item?.eventTitle} />
                </div>

                <nav className="cardFirsBox">
                  <p>{item?.eventTitle}</p>
                  <div>
                    <h3>{item?.startDate}</h3>
                  </div>
                </nav>

                <nav className="cardSecondBox">
                  {item?.eventDescription?.slice(0, 85)}...
                </nav>

                <nav className="address">
                  <MdLocationOn className="location" />
                  <p>{item?.eventLocation}</p>
                </nav>

                <nav className="cardThirdBox">
                  <p>{formatNaira(item?.ticketPrice)}</p>
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
