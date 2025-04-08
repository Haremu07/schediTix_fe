import React from 'react'
import './landing.css'
import { useEffect, useState } from "react"
import { TbTargetArrow } from "react-icons/tb";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { GrServerCluster } from "react-icons/gr";
import { FaListAlt } from "react-icons/fa";
import Cards from "./Cards";
import Card2 from "./Card2";
import img1 from "../../assets/Property 1=happy-romantic-couple-hugging-summer-field 7 (1).png"
import img2 from "../../assets/Hero carousel.png"
import img3 from "../../assets/Property 1=happy-romantic-couple-hugging-summer-field 8.jpg"
import img4 from "../../assets/Property 1=happy-romantic-couple-hugging-summer-field 9.jpg"

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlides, setCurrentSlides] = useState(0)
  const [fade, setFade] = useState(false)

  const slides = [
    {
      Image: img2
  },
    {
      Image: img1
  },
    {
      Image: img3
  },
    {
      Image: img4
  },
    
];

const slides2 = [
  {
    text: "Everything You Need to Create, manage, and attend Events."
  },
  {
    text: "ShediTix go helep you sama beta party for people to flenjoor!!."
  },
];

useEffect(() => {
  const interval = setInterval(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 3000)
  }, 3000)
  return () => clearInterval(interval);
}, [slides.length])


useEffect(() => {
  const interval = setInterval(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlides((prev) => (prev + 1) % slides2.length);
      setFade(false);
    }, 3000)
  }, 3000)
  return () => clearInterval(interval);
}, [slides2.length])
  return (
    <div className="LandingPage-body">
      <div className={`LandingPageImgBox ${fade ? "fade" : ""}`}
      style={{ backgroundImage: `url(${slides[currentSlide].Image})`}}
      >
        <img className="Img" src={slides[currentSlide].Image} />
        <div className="LandinPageImgBoxText">
          <h1 className="LandinPageImgBoxTextH1">Transform Your Events Into Unforgettable Experience</h1>
          <p className="LandinPageImgBoxTextP">SchediTix simplifies ticketing and event management in one powerful tool</p>
          <button className="Btn">Get started for free</button>
        </div>
      </div>
      <div className="LandingPageBox2">
        <div className="LandingPageBox2Nav1">
          <div className="LandingPageBox2Nav1Small">
            <p>Why choose ShediTix?</p>
            <h1 className="LandingPageBox2Nav1SmallH1" >{slides2[currentSlides].text}</h1>
            <p>SchediTix brings event planning and ticketing to your 
              fingertips. Whether you're an event organizer or an 
              attendee, our platform offers a seamless experience.
               From easy event creation to simple ticket purchases and 
               real-time updates, we've got you covered.</p>
               <div className="LandingPageBox2Nav1SmallBox">
                <button className="Btns">Create an event</button>
                <button className="Btns2">Attend an event</button>
               </div>
          </div>
        </div>

        <div className="LandingPageBox2Nav1">
        <div className="LandingPageBox2Nav1Small2">
          <div className="card">
            <div className="cardNav"><TbTargetArrow size={70}/></div>
            <div className="cardNav">
              <p>Effortless Event Creation for Organizers</p>
            </div>
          </div>
          <div className="card">
             <div className="cardNav"><BsTicketPerforatedFill size={80}/></div>
            <div className="cardNav">
              <p>Admin Dashboard for Seamless Event Management</p>
            </div>
          </div>
          <div className="card">
             <div className="cardNav"><GrServerCluster size={60}/></div>
            <div className="cardNav">
              <p> Simple Ticketing System with Purchase Confirmation</p>
            </div>
          </div>
          <div className="card">
             <div className="cardNav"><FaListAlt size={70}/></div>
            <div className="cardNav">
              <p>Streamlined Event Listings for Attendees</p>
            </div>
          </div>
        </div>
        </div>
      </div>


      <div className="TrendingEventBlock">
          <div className="TrendingEventBlockHeader">
            <h1>Trending Events</h1>
            <img src="../../../public/images/Vector.png" alt="" />
          </div>
          <div className="TrendingEventBlockScroll">
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st December, 2025" content="This is the 4th edition of the biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="2,000"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle love feast" Date="23rd December, 2025" content="This is the 4th edition of the biggest community love feast." Location="Ayobami Hall" Price="Free"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle City Youth Marathon" Date="18th Novenber, 2025" content="The Aj City Youth Marathon celebrates the resilience of the  ajegunle youth" Location="Eko Hotel and Suites" Price="5,000"/>
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st September, 2025" content="This is the 4th edition of te biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="20,000"/>
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st December, 2025" content="This is the 4th edition of the biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="2,000"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle love feast" Date="23rd December, 2025" content="The Aj City Youth Marathon celebrates the resilience of the  ajegunle youth" Location="Ayobami Hall" Price="Free"/>
            <Cards img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3T5OktPF7vAENJ28_hj-lO5Ww4mw55bXkQ&s" text1="Ajegunle City Youth Marathon" Date="18th Novenber, 2025" content="The Aj City Youth Marathon celebrates the resilience of the  ajegunle youth" Location="Eko Hotel and Suites" Price="5,000"/>
            <Cards img="https://www.astro.com/im/in/sr_cosmic_sky.jpg" text1="CONVERGENCE OF STARS" Date="21st September, 2025" content="This is the 4th edition of te biggest community awards ceremony in Africa." Location="Eko Hotel and Suites" Price="20,000"/>
     
          </div>
        </div>

        <div className="FeaturedEventBlocked">
            <div className="FeaturedEventBlockedHeader">
              <h1>Featured Events</h1>
            <img src="../../../public/images/Vector.png" alt="" />
            </div>
            <div className="FeaturedEventBlockedBody">
              <Card2 text="Kora Hack2.0 - Redesigni..." content="A 14-day hackathon to build  ideas that are breaking boundaries 
              in how we pay, buy, and sell in emerging markets. KoraHACK 2.0 is sponsored by Kora, 
              a pan-African payment gateway." image="../../../public/images/Frame 236 (1).png"/>
              <Card2 text="Genz Tech Fest 2024" content="We are GenZtechies, where Gen-Z developers,
               founders, designers, and techies can connect, learn, 
               and discover life-changing opportunities." image="../../../public/images/fusion 236.png"/>
              <Card2 text="Lagos Tech Fest" content="Now in its 5th year, Lagos Tech Fest gathers startups, innovators, 
              investors, and government representatives to shape Nigeria's tech future through conferences,
               exhibitions, networking....." image="../../../public/images/TechFrame 236.png"/>
              <Card2 text="Adanian Labs Africa merges with ImpalaPay" content="A Pan African Venture Studio Actuating the 
              Tech Revolution for a Borderless Africa. Unleash the full potential of your business with our groundbreaking ..." 
              image="../../../public/images/Frame 236 (1).png"/>
            </div>
        </div>
    </div>
  )
}

export default LandingPage