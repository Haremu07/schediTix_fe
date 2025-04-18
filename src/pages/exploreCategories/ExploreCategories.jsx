import "./exploreCategories.css"
import ExploreFeatures from "./ExploreFetures"
import mic from "../../assets/mic.jpg"

const ExploreCategories = () => {
  return (
    <div className="exploreMainPage">
      <nav className="exploreLandingPage">
        <div className="exploreMiddleBox">
          <section className="exlporeMiddleTop">
            <h1>Shows</h1>
            <div className="exploreReplaceIn"></div>
            <h1 style={{ color: "#271b6b" }}>Comedy</h1>
          </section>

          <div className="exploreMiddleCenter">
            <div className="explorelistOfShowsBox active">Mykeal wise live</div>
            <div className="explorelistOfShowsBox">MC Savio show</div>
            <div className="explorelistOfShowsBox">Rabboski comedy sh</div>
          </div>

          <nav className="billBord">
            <section className="fadedBlackBox">
              <img src={mic || "/placeholder.svg"} alt="" className="billBordImg" />
              <div className="exploreBillBordText">
                <p>Comedy Shows in</p>
                <p>Lagos</p>
              </div>
            </section>
          </nav>
        </div>
      </nav>
      <ExploreFeatures />
    </div>
  )
}

export default ExploreCategories