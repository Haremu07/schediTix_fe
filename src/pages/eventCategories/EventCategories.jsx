import React, { useEffect, useState } from 'react'
import "./eventCategories.css"
import EventForYou from './EventForYou'
import StayinLoop from './StayinLoop'
import FeatureComp from './FeatureComp'
import { useNavigate } from 'react-router-dom'
// import Event1 from "../../assets/Event1.jpg"
// import Event2 from "../../assets/Event2.jpg"
// import Event3 from "../../assets/Event3.jpg"
// import Event4 from "../../assets/Event 4.jpg"
// import Event5 from "../../assets/Event5.jpg"
import axios from 'axios'




const EventCategories = () => 
  {
  const navigate = useNavigate()
  const[activeCategoyId, setActiveCategoryId] = useState(null)
  const [events, setEvents] = useState([])
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

    const fetchEventsForCategory = async (categoryName) => {
      const category = categories.find(cat => cat.categoryName.toLowerCase() === categoryName.toLowerCase());
      // console.log(category)
      if (category && category.events) {
        setEvents(category.events);
      } else {
        setEvents([]); 
      }
    };
    
    useEffect(() => {
      handleCategories()
    },[])
    

    const handleCategoryClick = (categoryId) => {
      const getEvents = categories.find(cat => cat.categoryName === categoryId);
      console.log(getEvents)
      setEvents(getEvents.events)
      setActiveCategoryId(categoryId)
    };

    useEffect(() => {
      if (categories.length > 0) {
        fetchEventsForCategory("Comedy");
        const comedyCategory = categories.find(cat => cat.categoryName.toLowerCase() === "Fashion Show");
        if (comedyCategory) {
          setActiveCategoryId(comedyCategory.categoryName); 
        } else if (categories.length > 0) {
          setActiveCategoryId(categories[0].categoryName); 
        }
      }
    }, [categories]);
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
          
          <section className='middleCenter' style={{cursor: "pointer"}}>
          {
            categories?.map(( category,index) => (
              <div className='listOfShowsBox' key={index} onClick={() => handleCategoryClick(category.categoryName)} style={{backgroundColor: activeCategoyId === category.categoryName ? "rgba(39, 24, 126, 1)" : "white", color: activeCategoyId === category.categoryName ? "white" : "rgba(50, 50, 50, 1)", border:activeCategoyId === category.categoryName && "none"}} >
              <p>{category.categoryName}</p>
            </div>
             ))
            }
           
           
          </section>

          <section className='middleBottom'>
            {
              events?.length == 0 ? <div className='noEvent'>There is no event yet</div> :
              events?.map((item, index) => (
                <article className='middleBottomCards' key={index}>
                  <img src={item.image.imageUrl} alt="" />
                  <div className='radientBlackBox'>
                    <nav className='middleBox'>
                      <p>{item.eventTitle}</p>
                      <p className='Categorylocation'>{item.eventLocation}</p >
                      <div className='seeMoreButton'>
                        <p 
                        onClick={()=> navigate(`/event-details/${item._id}`)}
                          >See More</p>
                      </div>
                    </nav>
                  </div>
                </article>
              ))
            }
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