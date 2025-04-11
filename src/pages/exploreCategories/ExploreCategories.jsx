import "./exploreCategories.css"
import ExploreFetures from './ExploreFetures'

const ExploreCategories = () => {
  return (
    <div className='exploreMainPage'>
        <nav className='exploreLandingPage'>
          <div className='exploreMiddleBox'>
              <section className='exlporeMiddleTop'>
              <h1>Shows</h1>
            <div style={{width:"20px", height:"3px", backgroundColor:"black", borderRadius:"5px" }}></div>
            <h1 style={{color:"#271b6b"}}>Comedy Show</h1>
              </section>

              <section className='exploreMiddleCenter'>
              <div className='explorelistOfShowsBox' style={{backgroundColor:"#27187d",border:"0px", color:"white"}}>
              <p><b>MyKeal wise live</b></p>
            </div>
            <div className='explorelistOfShowsBox'>
              <p><b>MC Savio show</b></p>
            </div>
            <div className='explorelistOfShowsBox'>
              <p><b>Rabboski comedy show</b></p>
            </div>
            <div className='explorelistOfShowsBox'>
              <p><b>North funny</b></p>
            </div>
            <div className='explorelistOfShowsBox'>
              <p><b>Mykeal live</b></p>
            </div>
           </section>
           
           <nav className='billBord'>
            <section className='fadedBlackBox'>

            </section>
          </nav>
          </div>
        </nav>
        <ExploreFetures/>
    </div>
  )
}

export default ExploreCategories
