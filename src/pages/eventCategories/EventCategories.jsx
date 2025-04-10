import React from 'react'
import "./eventCategories.css"
import EventForYou from './EventForYou'
import StayinLoop from './StayinLoop'
import FeatureComp from './FeatureComp'
import { useNavigate } from 'react-router-dom'

// const CardDetaisl = [
//   {
//     title: "MyKealWise Comedy Live",
//     state: "Lagos",
//     button:"See more"
//   },
//   {
//     title: "Laff with Mc Savio - Live  in",
//     state: "Ajegunle",
//     button:"See more"
//   },
//   {
//     title: "Laugh with Bukola 8th of March",
//     state: "Ajegunle",
//     button:"See more"
//   },
//   {
//     title: "Laugh with Bukola 8th of March",
//     state: "Ajegunle",
//     button:"See more"
//   },
// ]

const EventCategories = () => {
  const navigate = useNavigate()
  return (
    <div className="MainPageEventCategories">
      <div className='topBox'></div>
      <div className='LandingPageEventCategories'>
        <nav className='middleBoxEventCategories'>
          <section className='middleTop'>
            <h4>Shows</h4>
            <div style={{width:"20px", height:"3px", backgroundColor:"black", borderRadius:"5px" }}></div>
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