import React from 'react'
import "./eventCategories.css"
import { MdLocationOn } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import CardImage1 from "../../assets/CardImage1.jpg"
import CardImage2 from "../../assets/CardImage2.png"
import cardImage3 from "../../assets/CardImage3.jpg"


const FeatureComp = () => {
  return (
    <div className='featureCamp'>
        <nav className='paddingBox'>
            <p><b>Feature Event</b></p>
            <div className='cardMainBox'>
            <section className='FeturesCards'>
              <div className='imageBox'>
                 <CiHeart className='favoriteIcon'/>
                <img src={CardImage1} alt="" />
              </div>
              <nav className='cardFirsBox'>
                <h1>CONVERGENE OF <br />STARS</h1>
                <div>
                  <p><b>21st</b></p>
                  <p><b>September</b></p>
                  <p><b>2025</b></p>
                </div>
              </nav>
              <nav className='cardSecondBox'>
                <p>This is the 4th edition of the biggest community</p>
                <p>award ceremony in Africa</p>
              </nav>
              <nav className='address'>
                <MdLocationOn  className='location'/>
                <p>Eko Hotel and Suites</p>
              </nav>
              <nav className='cardThirdBox'>
                <p><b>N 20,000</b></p>
                <span>
                  Buy Tickets
                </span>
              </nav>
            </section>

            <section className='FeturesCards'>
              <div className='imageBox'>
              <CiHeart className='favoriteIcon'/>
                <img src={CardImage2} alt="" />
              </div>
              <nav className='cardFirsBox'>
                <h1>CONVERGENE OF <br />STARS</h1>
                <div>
                  <p><b>21st</b></p>
                  <p><b>September</b></p>
                  <p><b>2025</b></p>
                </div>
              </nav>
              <nav className='cardSecondBox'>
                <p>This is the 4th edition of the biggest community</p>
                <p>award ceremony in Africa</p>
              </nav>
                 
              <nav className='address'>
              <MdLocationOn  className='location'/>
                <p>Eko Hotel and Suites</p>
              </nav>
              <nav className='cardThirdBox'>
                <p><b>N 20,000</b></p>
                <span>
                  Buy Tickets
                </span>
              </nav>
            </section>

            <section className='FeturesCards'>
              <div className='imageBox'>
              <CiHeart className='favoriteIcon'/>
                <img src={cardImage3} alt="" />
              </div>
              <nav className='cardFirsBox'>
                <h1>CONVERGENE OF <br />STARS</h1>
                <div>
                  <p><b>21st</b></p>
                  <p><b>September</b></p>
                  <p><b>2025</b></p>
                </div>
              </nav>
              <nav className='cardSecondBox'>
                <p>This is the 4th edition of the biggest community</p>
                <p>award ceremony in Africa</p>
              </nav>
              <nav className='address'>
              <MdLocationOn  className='location'/>
                <p>Eko Hotel and Suites</p>
              </nav>
              <nav className='cardThirdBox'>
                <p><b>N 20,000</b></p>
                <span>
                  Buy Tickets
                </span>
              </nav>
            </section>

            <section className='FeturesCards'>
              <div className='imageBox'>
              <CiHeart className='favoriteIcon'/>
                <img src={CardImage1} alt="" />
              </div>
              <nav className='cardFirsBox'>
                <h1>CONVERGENE OF <br />STARS</h1>
                <div>
                  <p><b>21st</b></p>
                  <p><b>September</b></p>
                  <p><b>2025</b></p>
                </div>
              </nav>
              <nav className='cardSecondBox'>
                <p>This is the 4th edition of the biggest community</p>
                <p>award ceremony in Africa</p>
              </nav>
              <nav className='address'>
              <MdLocationOn  className='location'/>
                <p>Eko Hotel and Suites</p>
              </nav>
              <nav className='cardThirdBox'>
                <p><b>N 20,000</b></p>
                <span>
                  Buy Tickets
                </span>
              </nav>
            </section>

            <section className='FeturesCards'>
              <div className='imageBox'>
              <CiHeart className='favoriteIcon'/>
                <img src={CardImage2} alt="" />
              </div>
              <nav className='cardFirsBox'>
                <h1>CONVERGENE OF <br />STARS</h1>
                <div>
                  <p><b>21st</b></p>
                  <p><b>September</b></p>
                  <p><b>2025</b></p>
                </div>
              </nav>
              <nav className='cardSecondBox'>
                <p>This is the 4th edition of the biggest community</p>
                <p>award ceremony in Africa</p>
              </nav>
              <nav className='address'>
              <MdLocationOn  className='location'/>
                <p>Eko Hotel and Suites</p>
              </nav>
              <nav className='cardThirdBox'>
                <p><b>N 20,000</b></p>
                <span>
                  Buy Tickets
                </span>
              </nav>
            </section>

            <section className='FeturesCards'>
              <div className='imageBox'>
              <CiHeart className='favoriteIcon'/>
                <img src={cardImage3} alt="" />
              </div>
              <nav className='cardFirsBox'>
                <h1>CONVERGENE OF <br />STARS</h1>
                <div>
                  <p><b>21st</b></p>
                  <p><b>September</b></p>
                  <p><b>2025</b></p>
                </div>
              </nav>
              <nav className='cardSecondBox'>
                <p>This is the 4th edition of the biggest community</p>
                <p>award ceremony in Africa</p>
              </nav>
              <nav className='address'>
              <MdLocationOn  className='location'/>
                <p>Eko Hotel and Suites</p>
              </nav>
              <nav className='cardThirdBox'>
                <p><b>N 20,000</b></p>
                <span>
                  Buy Tickets
                </span>
              </nav>
            </section>

            
            </div>
        </nav>
    </div>
  )
}

export default FeatureComp