import "./cards.css"
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import img1 from "../../assets/Frame 50 (1).png"
import img2 from "../../assets/Frame 50 (2).png"
import img3 from "../../assets/Frame 50 (3).png"
import cimg1 from "../../assets/Ellipse 1.png"
import cimg2 from "../../assets/Ellipse 2.png"
import cimg3 from "../../assets/Ellipse 3.png"
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Card3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [fade, setFade] = useState(false)
    const [currentText, setCurrentText] =useState(0)

    const slides = [
        {
            image: img1
        },
        {
            image: img2
        },
        {
            image: img3
        },
    ] 

    const Texts = [
        {
            Text: "SchediTix made organizing our wedding so easy! From setting up the event to managing ticket sales, everything was straightforward and seamless. Our guests loved the easy ticket purchase process and the event details right at their fingertips!",
            Text2: "Raphael & Chidera, Wedding Organisers",
        },

        {
            Text: "I’ve been using SchediTix for several corporate events, and it's been fantastic. The admin dashboard is easy to navigate, and our attendees love how simple it is to buy tickets. It's made event planning stress-free!",
            Text2: "Jessica, Corporate Event Coordinator",
        },
        {
            Text: "SchediTix made organizing our wedding so easy! From setting up the event to managing ticket sales, everything was straightforward and seamless. Our guests loved the easy ticket purchase process and the event details right at their fingertips!",
            Text2: "Mino & Chioma, Wedding Organisers",
        },
        {
            Text: "SchediTix helped us sell out our local tech conference! The ticketing system was smooth, and the email confirmation made everything clear for attendees. The platform saved us time and energy, allowing us to focus on making the event a success!",
            Text2: "Genz Techies, Tech enthusiasts ",
        },
    ]
    useEffect(() =>{
        const interval = setInterval(() =>{
            setFade(true),
            setTimeout(() =>{
                setCurrentSlide((prev) => (prev + 1) % slides.length)
                setFade(false)
            },3000)
        },3000)
        return () => clearInterval(interval)
    },[slides.length])

    useEffect(() => {
        const interval = setInterval(() => {
        setFade(true),
        setTimeout(()=>{
            setCurrentText((prev) => (prev + 1) % Texts.length)
            setFade(false)
        },3000)
    }, 3000)
    return () => clearInterval(interval)
},[Texts.length])
  return (
    <>
      <div className="UsersBlockHeader">
        <h1>What Our User Says About Us</h1>
      </div>
      <div className="UsersBlockNav">
        <FaLessThan style={{cursor: "pointer"}} size={40} onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}/>
        <div className={`UsersBlockNav1 ${fade ? "fade" : ""}`}>
          <img className="UsersBlockNav1Img" src={slides[currentSlide].image} alt="" />
        </div>

        <div className={`UsersBlockNav1 ${fade ? "fade" : ""}`}>
           <div className="UsersBlockNav1Text">
           <h1>< FaQuoteLeft/></h1>
           <p>{Texts[currentText].Text}</p>
          <p>{Texts[currentText].Text2}</p>
            <div className="UsersBlockNav1Box">
                <div className="ImgBox">
                    <div className="ImgBoxCircle">
                        <img className="circleBox" src={cimg1} alt="" />
                    </div>
                    <div className="ImgBoxCircle1">
                    <img className="circleBox" src={cimg2} alt="" />
                    </div>
                    <div className="ImgBoxCircle2">
                    <img className="circleBox" src={cimg3} alt="" />
                    </div>
                    <div className="stars">
                        <p>500+</p>
                        <FaStar color="orange"/>
                        <FaStar color="orange"/>
                        <FaStar color="orange"/>
                        <FaStar color="orange"/>
                        <FaStar color="orange"/>
                    </div>
                </div>
            </div>
           </div>
        </div>
        <FaGreaterThan style={{cursor: "pointer"}} size={40} onClick={()=> setCurrentSlide((prev) => (prev + 1) % slides.length)}/>
      </div>
    </>
  );
};

export default Card3;
