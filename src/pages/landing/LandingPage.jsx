import "./landing.css";
import { useEffect, useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { GrServerCluster } from "react-icons/gr";
import { FaListAlt } from "react-icons/fa";
import Cards from "./Cards";
import Card2 from "./Card2";
import img1 from "../../assets/Property 1=happy-romantic-couple-hugging-summer-field 7 (1).png";
import img2 from "../../assets/Hero carousel.png";
import img3 from "../../assets/Property 1=happy-romantic-couple-hugging-summer-field 8.jpg";
import img4 from "../../assets/Property 1=happy-romantic-couple-hugging-summer-field 9.jpg";
import vector from "../../assets/Vector.png";
import Card3 from "./Card3";
import { useNavigate } from "react-router-dom";
// import { FaGreaterThan } from "react-icons/fa6";
// import { FaLessThan } from "react-icons/fa6";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlides, setCurrentSlides] = useState(0);
  const [fade, setFade] = useState(false);

  const slides = [
    {
      Image: img2,
    },
    {
      Image: img1,
    },
    {
      Image: img3,
    },
    {
      Image: img4,
    },
  ];

  const slides2 = [
    {
      text: "Everything You Need to Create, manage, and attend Events.",
    },
    {
      text: "ShediTix go helep you sama beta party for people to flenjoor!!.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 3000);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlides((prev) => (prev + 1) % slides2.length);
        setFade(false);
      }, 3000);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides2.length]);

  const navigate = useNavigate();
  const token = localStorage.getItem(`userToken`);

  return (
    <div className="LandingPage-body">
      <div
        className={`LandingPageImgBox ${fade ? "fade" : ""}`}
        style={{ backgroundImage: `url(${slides[currentSlide].Image})` }}
      >
        <img className="Img" src={slides[currentSlide].Image} />
        <div className="LandinPageImgBoxText">
          <h1 className="LandinPageImgBoxTextH1">
            Transform Your Events Into Unforgettable Experience
          </h1>
          <p className="LandinPageImgBoxTextP">
            SchediTix simplifies ticketing and event management in one powerful
            tool
          </p>
          {token ? (
            ""
          ) : (
            <button className="Btn" onClick={() => navigate("/login")}>
              Get started for free
            </button>
          )}
        </div>
      </div>
      <div className="LandingPageBox2">
        <div className="LandingPageBox2Nav1">
          <div className="LandingPageBox2Nav1Small">
            <p>Why choose ShediTix?</p>
            <h1 className="LandingPageBox2Nav1SmallH1">
              {slides2[currentSlides].text}
            </h1>
            <p>
              SchediTix brings event planning and ticketing to your fingertips.
              Whether you're an event organizer or an attendee, our platform
              offers a seamless experience. From easy event creation to simple
              ticket purchases and real-time updates, we've got you covered.
            </p>
           {
            token ? (
              <div className="LandingPageBox2Nav1SmallBox">
              <button className="Btns" onClick={() => navigate("/dashboard/create-event")}>
                Create an event
              </button>
              <button className="Btns2" onClick={() => navigate("/dashboard/upcoming-events")}>
                Attend an event
              </button>
            </div>
            ) : (
              <div className="LandingPageBox2Nav1SmallBox">
              <button className="Btns" onClick={() => navigate("/login")}>
                Create an event
              </button>
              <button className="Btns2" onClick={() => navigate("/login")}>
                Attend an event
              </button>
            </div>
            )
           }
          </div>
        </div>

        <div className="LandingPageBox2Nav2">
          <div className="LandingPageBox2Nav1Small2">
            <div className="card">
              <div className="cardNav">
                <TbTargetArrow size={50} />
              </div>
              <div className="cardNav2">
                <p>Effortless Event Creation for Organizers</p>
              </div>
            </div>
            <div className="card">
              <div className="cardNav">
                <BsTicketPerforatedFill size={50} />
              </div>
              <div className="cardNav2">
                <p>Admin Dashboard for Seamless Event Management</p>
              </div>
            </div>
            <div className="card">
              <div className="cardNav">
                <GrServerCluster size={50} />
              </div>
              <div className="cardNav2">
                <p> Simple Ticketing System with Purchase Confirmation</p>
              </div>
            </div>
            <div className="card">
              <div className="cardNav">
                <FaListAlt size={50} />
              </div>
              <div className="cardNav2">
                <p>Streamlined Event Listings for Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="TrendingEventBlock">
        <div className="TrendingEventBlockHeader">
          <h2>Trending Events</h2>
          <img src={vector} alt="" />
        </div>
        {/* <FaGreaterThan/> */}
        <div className="TrendingEventBlockScroll">
          <Cards
            img="https://www.astro.com/im/in/sr_cosmic_sky.jpg"
            text1="CONVERGENCE OF STARS"
            Date="21st December, 2025"
            content="This is the 4th edition of the biggest community awards ceremony in Africa."
            Location="Eko Hotel and Suites"
            Price="2,000"
          />
         
          <Cards
            img="https://www.astro.com/im/in/sr_cosmic_sky.jpg"
            text1="CONVERGENCE OF STARS"
            Date="21st September, 2025"
            content="This is the 4th edition of te biggest community awards ceremony in Africa."
            Location="Eko Hotel and Suites"
            Price="20,000"
          />
          <Cards
            img="https://www.astro.com/im/in/sr_cosmic_sky.jpg"
            text1="CONVERGENCE OF STARS"
            Date="21st December, 2025"
            content="This is the 4th edition of the biggest community awards ceremony in Africa."
            Location="Eko Hotel and Suites"
            Price="2,000"
          />
         
          <Cards
            img="https://www.astro.com/im/in/sr_cosmic_sky.jpg"
            text1="CONVERGENCE OF STARS"
            Date="21st September, 2025"
            content="This is the 4th edition of te biggest community awards ceremony in Africa."
            Location="Eko Hotel and Suites"
            Price="20,000"
          />
          <Cards
            img="https://www.astro.com/im/in/sr_cosmic_sky.jpg"
            text1="CONVERGENCE OF STARS"
            Date="21st September, 2025"
            content="This is the 4th edition of te biggest community awards ceremony in Africa."
            Location="Eko Hotel and Suites"
            Price="20,000"
          />
          <Cards
            img="https://www.astro.com/im/in/sr_cosmic_sky.jpg"
            text1="CONVERGENCE OF STARS"
            Date="21st September, 2025"
            content="This is the 4th edition of te biggest community awards ceremony in Africa."
            Location="Eko Hotel and Suites"
            Price="20,000"
          />
        </div>
      </div>

      <div className="FeaturedEventBlocked">
        <div className="FeaturedEventBlockedHeader">
          <h2>Featured Events</h2>
          <img src={vector} alt="" />
        </div>
        <div className="FeaturedEventBlockedBodyHold">
          <div className="FeaturedEventBlockedBody">
            <Card2
              text="Kora Hack2.0 - Redesigni..."
              content="A 14-day hackathon to build  ideas that are breaking boundaries 
              in how we pay, buy, and sell in emerging markets. KoraHACK 2.0 is sponsored by Kora, 
              a pan-African payment gateway."
              image={img1}
            />
            <Card2
              text="Genz Tech Fest 2024"
              content="We are GenZtechies, where Gen-Z developers,
               founders, designers, and techies can connect, learn, 
               and discover life-changing opportunities."
              image={img2}
            />
            <Card2
              text="Lagos Tech Fest"
              content="Now in its 5th year, Lagos Tech Fest gathers startups, innovators, 
              investors, and government representatives to shape Nigeria's tech future through conferences,
               exhibitions, networking....."
              image={img3}
            />
            <Card2
              text="Adanian Labs Africa merges with ImpalaPay"
              content="A Pan African Venture Studio Actuating the 
              Tech Revolution for a Borderless Africa. Unleash the full potential of your business with our groundbreaking ..."
              image={img4}
            />
          </div>
          <button className="FeaturedEventBlockedBtn">View all</button>
        </div>
      </div>

      <div className="UsersBlock">
        <Card3 />
      </div>

      <div className="PerfectPlanBlock">
        <div className="PerfectPlanBlockHeader">
          <h2>Choose The Perfect Plan For Your Event Needs</h2>
          <img src={vector} alt="" />
        </div>
        <div className="PerfectPlanBlockPlnsBox">
          <div className="PlanCards">
            <div className="PlanCardsHeader">
              <h3> Basic Plan</h3>
              <p className="PlanCardsHeaderP">
                Perfect for small events or those just getting started.
              </p>
              <button className="PlanCardsHeaderBtn">Free</button>
            </div>
            <div className="PlanCardsContents">
              <ul className="ul">
                <li>Event Creation: 1 event at a time</li>
                <li>
                  Ticket Sales: Limited to 100 tickets per event Basic Event
                </li>
                <li>Listing Basic Email Support Create 2 events for free</li>
              </ul>
            </div>
            {
            token ? null : ( <button className="PlanCardsBtn" onClick={() => navigate("")}>
            Get Started For Free
          </button>)  
           }
          </div>
          <div className="PlanCard">
            <div className="PlanCardsHeader">
              <h3>Pro Plan</h3>
              <p className="PlanCardsHeaderP">
                Perfect for small events or those just getting started.
              </p>
              <button className="PlanCardsHeaderBtn2">#30,000/year</button>
            </div>
            <div className="PlanCardsContents">
              <ul className="ul">
                <li>Event Creation: Unlimited events</li>
                <li>Ticket Sales: Up to 1,000 tickets per event</li>
                <li>
                  {" "}
                  Analytics Dashboard: Basic ticket sales and attendee tracking{" "}
                </li>
              </ul>
            </div>
           {
            token ? ( <button className="PlanCardsBtn" onClick={() => navigate("")}>
            Upgrade Plan
          </button>) : ( <button className="PlanCardsBtn" onClick={() => navigate("/login")}>
          Get Started For Free
            </button>)
           }
          </div>
          <div className="PlanCards">
            <div className="PlanCardsHeader">
              <h3>Premium Plan</h3>
              <p className="PlanCardsHeaderP">
                Perfect for small events or those just getting started.
              </p>
              <button className="PlanCardsHeaderBtn3">#60,000/year</button>
            </div>
            <div className="PlanCardsContents">
              <ul className="ul">
                <li>Event Creation: Unlimited events </li>
                <li> Ticket Sales: Unlimited tickets per event </li>
                <li>
                  Advanced Analytics: reports on ticket sales,demographics, and
                  performance
                </li>
              </ul>
            </div>
            {
            token ? ( <button className="PlanCardsBtn" onClick={() => navigate("")}>
            Upgrade Plan
          </button>) : ( <button className="PlanCardsBtn" onClick={() => navigate("/login")}>
          Get Started For Free
            </button>)
           }
          </div>
        </div>
      </div>

     {
      token ? (null): (
        <div className="GetStartedBlock">
        <div className="GetStartedBlockBox">
          <h2>Get Started Now and Bring Your Event to Life!</h2>
          <p className="GetStartedBlockBoxP">
            SchediTix is an intuitive platform designed to help event organizers
            effortlessly create, manage, and promote events. From weddings to
            concerts, our easy-to-use tools streamline event planning, ticket
            sales, and user engagement in one seamless experience.
          </p>
          <button
            className="GetStartedBlockBoxBtn"
            onClick={() => navigate("/login")}
          >
            Get Started For Free
          </button>
        </div>
      </div>
      )
     }

      <div className="StayInLoopBlock">
        <div className="StayInLoopBlockNav">
          <div className="StayInLoopBlockNavSmall">
            <h3>Stay in the Loop with SchediTix Updates!</h3>
            <p className="StayInLoopBlockNavSmallP">
              Get the latest event planning tips, platform updates, exclusive
              offers, and more, straight to your inbox. Sign up for our
              newsletter and never miss out on exciting news and features.
            </p>
          </div>
        </div>
        <div className="StayInLoopBlockNav">
          <div className="StayInLoopBlockNavbox">
            <input
              className="ipute"
              type="text"
              placeholder="enther your emaill address"
            />
            <button className="suscribe">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
