import React from 'react'
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




const EventCategories = () => {
  const navigate = useNavigate()
  return (
    <div className="MainPageEventCategories">
      <div className='topBox'></div>
      <div className='LandingPageEventCategories'>
        <nav className='middleBoxEventCategories'>
          <section className='middleTop'>
            <h4>Shows</h4>
            <div className='replaceInline1'></div>
            <h1 style={{color:"#271b6b"}}>Comedy Show</h1>
          </section>
          
          <section className='middleCenter'>
            <div className='listOfShowsBox' style={{backgroundColor:"#27187d",border:"0px", color:"white"}}>
              <p><b>Comedy Show</b></p>
            </div>
            <div className='listOfShowsBox'>
              <p><b>Weddings</b></p>
            </div>
            <div className='listOfShowsBox'>
              <p><b>Tech Event</b></p>
            </div>
            <div className='listOfShowsBox'>
              <p><b>Fashion Show</b></p>
            </div>
            <div className='listOfShowsBox'>
              <p><b>Conferences</b></p>
            </div>
          </section>

          <section className='middleBottom'>
            <article className='middleBottomCards'>
                 <img src={Event1} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p><b>MyKealWise Comedy Live</b></p>
                  <p><b>Lagos</b></p>
                  <div className='seeMoreButton'>
                    <p 
                    onClick={()=> navigate("/event-details")}
                      ><b>See More</b></p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event2} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p><b>MyKealWise Comedy Live</b></p>
                  <p><b>Lagos</b></p>
                  <div className='seeMoreButton'>
                    <p
                    onClick={()=> navigate("/event-details")}
                    ><b>See More</b></p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event3} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p><b>MyKealWise Comedy Live</b></p>
                  <p><b>Lagos</b></p>
                  <div className='seeMoreButton'>
                    <p
                    onClick={()=> navigate("/event-details")}
                    ><b>See More</b></p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event4} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p><b>MyKealWise Comedy Live</b></p>
                  <p><b>Lagos</b></p>
                  <div className='seeMoreButton'>
                    <p
                    onClick={()=> navigate("/event-details")}
                    ><b>See More</b></p>
                  </div>
                </nav>
              </div>
            </article>
            <article className='middleBottomCards'>
                 <img src={Event5} alt="" />
              <div className='radientBlackBox'>
                <nav className='middleBox'>
                  <p><b>MyKealWise Comedy Live</b></p>
                  <p><b>Lagos</b></p>
                  <div className='seeMoreButton'>
                    <p><b>See More</b></p>
                  </div>
                </nav>
              </div>
            </article>
          </section>
        </nav>
      </div>
      <div style={{width:"100%", height:"10vh", backgroundColor:"#edecf4"}}></div>
     <FeatureComp/>
     <EventForYou/>
     <StayinLoop/>
    </div>
  )
}

export default EventCategories