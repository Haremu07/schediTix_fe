import React, { useEffect, useState } from 'react'
import "./eventCategories.css"
import EventForYou from './EventForYou'
import StayinLoop from './StayinLoop'
import FeatureComp from './FeatureComp'
import { useNavigate } from 'react-router-dom'
import Event1 from "../../assets/Event1.jpg"
import Event2 from "../../assets/Event2.jpg"
import Event3 from "../../assets/Event3.jpg"
import Event4 from "../../assets/Event 4.jpg"
import Event5 from "../../assets/Event5.jpg"
import axios from 'axios'




const EventCategories = () => {
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])
    const BASEURL = "https://scheditix.onrender.com";
  
    const handleCategories = async() => {
      try {
      const response = await axios.get(`${BASEURL}/api/v1/allCategories`)
      setCategories(response?.data.data)
        console.log("Available categories", response)
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      handleCategories()
    },[])
  return (
    <div className="MainPageEventCategories">
      <div className='topBox'></div>
      <div className='LandingPageEventCategories'>
        <nav className='middleBoxEventCategories'>
          <section className='middleTop'>
            <h4>Shows</h4>
            {/* <div className='replaceInline1'></div>
            <h1 style={{color:"#271b6b"}}>Comedy Show</h1> */}
          </section>
          
          <section className='middleCenter'>
          {
            categories.map(( category,index) => (
              <div className='listOfShowsBox' key={index} >
              <p>{category.categoryName}</p>
            </div>
             ))
            }
           
           
          </section>

          <section className='middleBottom'>
            <article className='middleBottomCards'>
                 <img src={Event1} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p>MyKealWise Comedy Live</p>
                  <p>Lagos</p>
                  <div className='seeMoreButton'>
                    <p 
                    onClick={()=> navigate("/event-details")}
                      >See More</p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event2} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                <p>MyKealWise Comedy Live</p>
                <p>Lagos</p>
                  <div className='seeMoreButton'>
                    <p
                    onClick={()=> navigate("/event-details")}
                    >See More</p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event3} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p>MyKealWise Comedy Live</p>
                  <p>Lagos</p>
                  <div className='seeMoreButton'>
                    <p
                    onClick={()=> navigate("/event-details")}
                    >See More</p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event4} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p>MyKealWise Comedy Live</p>
                  <p>Lagos</p>
                  <div className='seeMoreButton'>
                    <p
                    onClick={()=> navigate("/event-details")}
                    >See More</p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event5} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                <p>MyKealWise Comedy Live</p>
                <p>Lagos</p>
                  <div className='seeMoreButton'>
                    <p>See More</p>
                  </div>
                </nav>
              </div>
            </article>
          </section>
        </nav>
      </div>
      <div style={{width:"100%", height:"10vh", backgroundColor:"#edecf4"}} className='buttom'></div>
     <FeatureComp/>
     <EventForYou/>
     <StayinLoop/>
    </div>
  )
}

export default EventCategories