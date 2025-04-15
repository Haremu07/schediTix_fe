import React from 'react'
import "./eventCategories.css"
import { GoArrowRight } from "react-icons/go";
import vector from "../../assets/Vector.png"

const EventForYou = () => {
  return (
    <div className='mainEventForYou'>
        <section className='firstBlock'></section>
        <section className='SecondBlock'>
            <nav className="textHeaders">
                <p>Event For You</p>
                <img src={vector} alt="" className='vectorim' />
            </nav>
            <div className='contentBox'>
                <span className='textBox'>
                   <h1><b>MyKealWise Comedy Live...</b></h1> 
                   <div  className="contentBoxText">
                    <p>A 14-day hackton to build to build ideas that </p>
                    <p>are breaking boundaries in how we pay</p>
                    <p>buy, and sell emerging markets.</p>
                    <p>KoraHACK 2.0 is sponsored by Kora, a</p>
                    <p>pan-African payment gateway</p>
                   </div>
                   <p style={{fontSize:"16px",display:"flex", gap:"10px", alignItems:"center" }}>
                    <b>See More</b>
                    <GoArrowRight style={{fontSize:"25px"}}/>
                    </p> 
                </span>
                <span className='imgDiv'>

                </span>
            </div>
            <div className='contentBox'>
                <span className='textBox'>
                   <h1><b>Lagos Tech Fest</b></h1> 
                   <div  className="contentBoxText">
                    <p>Now in its 5th year, Lagos Tech Fest</p>
                    <p>gather startup, innovating, investor</p>
                    <p>and government representative to</p>
                    <p>shape Nigeria's tech future through</p>
                    <p>conference, exhibitions, networking.....</p>
                   </div>
                   <p style={{fontSize:"16px",display:"flex", gap:"10px", alignItems:"center"}}>
                    <b>See More</b>
                    <GoArrowRight style={{fontSize:"25px"}}/>
                    </p>  
                </span>
                <span className='imgDiv'>

                </span>
            </div>
           
        </section>
        <section className='ThirdBlock'>
        <nav className="textHeaders2">

        </nav>
        <div className='contentBox'>
                <span className='textBox'>
                   <h1><b>Genz Tech Fest 2024</b></h1> 
                   <div  className="contentBoxText">
                    <p>we are Genztechies, where Gen-Z </p>
                    <p>developer, founders, designes, and</p>
                    <p>technies can connect, learn, and discover</p>
                    <p>life-changing, opportunities</p>
                   </div>
                   <p style={{fontSize:"16px",display:"flex", gap:"10px", alignItems:"center"}}>
                    <b>See More</b>
                    <GoArrowRight style={{fontSize:"25px"}}/>
                    </p> 
                </span>
                <span className='imgDiv'>

                </span>
            </div>
            <div className='contentBox'>
                <span className='textBox'>
                   <h1><b>Adanian Labs Africa <br />merges with imapalaPay</b></h1> 
                   <div  className="contentBoxText">
                    <p>A Pan Africa Venture studio Actuating</p>
                    <p>the Tech Revolution for Borderless</p>
                    <p>Africa. Unleash the full potential of your </p>
                    <p>business with our groundbreaking ...</p>
                   </div>
                   <p style={{fontSize:"16px",display:"flex", gap:"10px", alignItems:"center"}}>
                    <b>See More</b>
                    <GoArrowRight style={{fontSize:"25px"}}/>
                    </p>  
                </span>
                <span className='imgDiv'>

                </span>
            </div>

        </section>
    </div>
  )
}

export default EventForYou
