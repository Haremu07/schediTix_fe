import React from 'react';
import "./eventCategories.css";
import { GoArrowRight } from "react-icons/go";
import vector from "../../assets/Vector.png";

const eventData = [
  {
    title: "MyKealWise Comedy Live...",
    description: [
      "A 14-day hackton to build to build ideas that",
      "are breaking boundaries in how we pay",
      "buy, and sell emerging markets.",
      "KoraHACK 2.0 is sponsored by Kora, a",
      "pan-African payment gateway"
    ]
  },
  {
    title: "MyKealWise Comedy Live...",
    description: [
      "Now in its 5th year, Lagos Tech Fest",
      "gather startup, innovating, investor",
      "and government representative to",
      "shape Nigeria's tech future through",
      "conference, exhibitions, networking....."
    ]
  },
  {
    title: "MyKealWise Comedy Live...",
    description: [
      "we are Genztechies, where Gen-Z",
      "developer, founders, designes, and",
      "technies can connect, learn, and discover",
      "life-changing, opportunities"
    ]
  },
  {
    title: "MyKealWise Comedy Live...",
    description: [
      "A Pan Africa Venture studio Actuating",
      "the Tech Revolution for Borderless",
      "Africa. Unleash the full potential of your",
      "business with our groundbreaking ..."
    ]
  }
];

const EventForYou = () => {
  return (
    <div className='mainEventForYou'>
      <section className='firstBlock'></section>

      <section className='SecondBlock'>
        <nav className="textHeaders">
          <p>Event For You</p>
          <img src={vector} alt="" className='vectorim' />
        </nav>

        {eventData.slice(0, 2).map((event, index) => (
          <div className='contentBox' key={index}>
            <span className='textBox'>
              <p>{event.title}</p>
              <div className="contentBoxText">
                {event.description.map((line, i) => <p key={i}>{line}</p>)}
              </div>
              <p style={{ fontSize: "16px", display: "flex", gap: "10px", alignItems: "center" }} className='seeMore'>
                <b>See More</b>
                <GoArrowRight style={{ fontSize: "25px" }} className='futureArrow' />
              </p>
            </span>
            <span className='imgDiv'></span>
          </div>
        ))}
      </section>

      <section className='ThirdBlock'>
        <nav className="textHeaders2"></nav>

        {eventData.slice(2).map((event, index) => (
          <div className='contentBox' key={index}>
            <span className='textBox'>
              <p>{event.title}</p>
              <div className="contentBoxText">
                {event.description.map((line, i) => <p key={i}>{line}</p>)}
              </div>
              <p style={{ fontSize: "16px", display: "flex", gap: "10px", alignItems: "center" }}>
                <b>See More</b>
                <GoArrowRight style={{ fontSize: "25px" }} />
              </p>
            </span>
            <span className='imgDiv'></span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventForYou;