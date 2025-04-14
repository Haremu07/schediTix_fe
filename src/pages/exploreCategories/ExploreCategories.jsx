import "./exploreCategories.css"
import ExploreFetures from './ExploreFetures'
import mic from "../../assets/mic.jpg" 

const ExploreCategories = () => {
  return (
    <div className='exploreMainPage'>
        <nav className='exploreLandingPage'>
          <div className='exploreMiddleBox'>
              <section className='exlporeMiddleTop'>
              <h1>Shows</h1>
            <div  className="exploreReplaceIn"></div>
            <h1 style={{color:"#271b6b"}}>Comedy Show</h1>
              </section>


           
           <nav className='billBord'>
            <section className='fadedBlackBox'>
              <img src={mic} alt="" className="billBordImg"/>
              <div className="exploreBillBordText">
                <p>Comedy Shows in</p>
                <p>Lagos</p>
            </div>
            </section>
           
          </nav>
          </div>
        </nav>
        <ExploreFetures/>
    </div>
  )
}

export default ExploreCategories
