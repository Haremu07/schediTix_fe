import React from 'react';
import './eventCategories.css';
import { MdLocationOn } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import CardImage1 from '../../assets/CardImage1.jpg';
import CardImage3 from '../../assets/CardImage3.jpg';
import vector from '../../assets/Vector.png';

const featuredEvents = [
  {
    id: 1,
    title: 'CONVERGENCE OF STARS',
    date: { day: '21st', month: 'September', year: '2025' },
    description: [
      'This is the 4th edition of the biggest community',
      'award ceremony in Africa',
    ],
    location: 'Eko Hotel and Suites',
    price: 'N 20,000',
    image: CardImage1,
  },
  {
    id: 2,
    title: 'CONVERGENCE OF STARS',
    date: { day: '21st', month: 'September', year: '2025' },
    description: [
      'This is the 4th edition of the biggest community',
      'award ceremony in Africa',
    ],
    location: 'Eko Hotel and Suites',
    price: 'N 20,000',
    image: CardImage3,
  },
];

const FeatureComp = () => {
  return (
    <div className="featureCamp">
      <nav className="paddingBox">
        <div className="combine">
          <p>Feature Event</p>
          <img src={vector} alt="" className="vectorImg" />
        </div>

        <div className="cardMainBox">
          {featuredEvents.map((event) => (
            <section key={event.id} className="FeturesCards">
              <div className="imageBox">
                <CiHeart className="favoriteIcon" />
                <img src={event.image} alt={event.title} />
              </div>

              <nav className="cardFirsBox">
                <p>{event.title}</p>
                <div>
                  <p>{event.date.day}</p>
                  <p>{event.date.month}</p>
                  <p>{event.date.year}</p>
                </div>
              </nav>

              <nav className="cardSecondBox">
                {event.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </nav>

              <nav className="address">
                <MdLocationOn className="location" />
                <p>{event.location}</p>
              </nav>

              <nav className="cardThirdBox">
                <p><b>{event.price}</b></p>
                <span className="buyTicketP">Buy Tickets</span>
              </nav>
            </section>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default FeatureComp;
