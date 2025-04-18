import "./exploreCategories.css"
import { MdLocationOn } from "react-icons/md"
import { CiHeart } from "react-icons/ci"

const ExploreFeatures = () => {
  return (
    <div className="exploreFeatureMain">
      <nav className="explorePaddingBox">
        <div>
          <p>
            <b>Featured Events</b>
          </p>
          <div className="featureUnderline"></div>
        </div>
        <section className="exploreCardBox">
          <section className="exploreFeturesCards">
            <section className="exploreimageBox">
              <CiHeart style={{ fontSize: "20px", margin: "15px", color: "white" }} />
              <img src="/placeholder.svg?height=180&width=300" alt="" />
            </section>
            <nav className="elpoerecardFirsBox">
              <h2>Ajegunle City Youth Marathon</h2>
              <div>
                <p>
                  <b>18th</b>
                </p>
                <p>
                  <b>November,</b>
                </p>
                <p>
                  <b>2025</b>
                </p>
              </div>
            </nav>
            <nav className="explorecardSecondBox">
              <p>The Aj City Youth Marathon celebrates the resilience of the ajegunle youth</p>
            </nav>
            <nav className="exploreaddress">
              <MdLocationOn style={{ fontSize: "20px" }} />
              <p>Eko Hotel and Suites</p>
            </nav>
            <nav className="cardThirdBox">
              <p>
                <b>₦20,000</b>
              </p>
              <span>Buy Ticket</span>
            </nav>
          </section>

          <section className="exploreFeturesCards">
            <section className="exploreimageBox">
              <CiHeart style={{ fontSize: "20px", margin: "15px", color: "white" }} />
              <img src="/placeholder.svg?height=180&width=300" alt="" />
            </section>
            <nav className="elpoerecardFirsBox">
              <h2>Ajegunle Love Feast</h2>
              <div>
                <p>
                  <b>23rd</b>
                </p>
                <p>
                  <b>December,</b>
                </p>
                <p>
                  <b>2025</b>
                </p>
              </div>
            </nav>
            <nav className="explorecardSecondBox">
              <p>This is the 4th edition of the biggest community love feast.</p>
            </nav>
            <nav className="exploreaddress">
              <MdLocationOn style={{ fontSize: "20px" }} />
              <p>Abayomi Hall</p>
            </nav>
            <nav className="cardThirdBox">
              <p>
                <b>₦20,000</b>
              </p>
              <span>Buy Ticket</span>
            </nav>
          </section>

          <section className="exploreFeturesCards">
            <section className="exploreimageBox">
              <CiHeart style={{ fontSize: "20px", margin: "15px", color: "white" }} />
              <img src="/placeholder.svg?height=180&width=300" alt="" />
            </section>
            <nav className="elpoerecardFirsBox">
              <h2>CONVERGENCE OF STARS</h2>
              <div>
                <p>
                  <b>21st</b>
                </p>
                <p>
                  <b>September,</b>
                </p>
                <p>
                  <b>2025</b>
                </p>
              </div>
            </nav>
            <nav className="explorecardSecondBox">
              <p>This is the 4th edition of the biggest community awards ceremony in Africa</p>
            </nav>
            <nav className="exploreaddress">
              <MdLocationOn style={{ fontSize: "20px" }} />
              <p>Eko Hotel and Suites</p>
            </nav>
            <nav className="cardThirdBox">
              <p>
                <b>₦20,000</b>
              </p>
              <span>Buy Ticket</span>
            </nav>
          </section>
        </section>
      </nav>
    </div>
  )
}

export default ExploreFeatures