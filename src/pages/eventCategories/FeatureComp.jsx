import React from 'react'
import "./eventCategories.css"
import { MdLocationOn } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import CardImage1 from "../../assets/CardImage1.jpg"
import CardImage2 from "../../assets/CardImage2.png"
import cardImage3 from "../../assets/CardImage3.jpg"
import vector from "../../assets/Vector.png"


const FeatureComp = () => {
  return (
    <div className='featureCamp'>
        <nav className='paddingBox'>
          <div className='combine'>
            <p>Feature Event</p>
            <img src={vector } alt="" className='vectorImg' />
          </div>
            <div className='cardMainBox'>
            <section className='FeturesCards'>
              <div className='imageBox'>
                 <CiHeart className='favoriteIcon'/>
                <img src={CardImage1} alt="" />
              </div>
              <nav className='cardFirsBox'>
              <p>CONVERGENE OF <br />STARS</p>
                <div>
                  <p>21st</p>
                  <p>September</p>
                  <p>2025</p>
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
                <span className='buyTicket'>
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
                <p>CONVERGENE OF <br />STARS</p>
                <div>
                <p>21st</p>
                  <p>September</p>
                  <p>2025</p>
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
                <span className='buyTicket'>
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
              <p>CONVERGENE OF <br />STARS</p>
                <div>
                <p>21st</p>
                  <p>September</p>
                  <p>2025</p>
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
                <span className='buyTicket'>
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
              <p>CONVERGENE OF <br />STARS</p>
                <div>
                <p>21st</p>
                  <p>September</p>
                  <p>2025</p>
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
                <span className='buyTicket'>
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
              <p>CONVERGENE OF <br />STARS</p>
                <div>
                <p>21st</p>
                  <p>September</p>
                  <p>2025</p>
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
                <span className='buyTicket'>
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
              <p>CONVERGENE OF <br />STARS</p>
                <div>
                <p>21st</p>
                  <p>September</p>
                  <p>2025</p>
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
                <span className='buyTicket'>
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