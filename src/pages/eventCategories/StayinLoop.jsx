import React from 'react'
import "./eventCategories.css"

const StayinLoop = () => {
  return (
    <div className='stayinLoopMain'>
        <nav className='stayinLoopPadding'>
            <div className='stayinLoopText'>
                <p><b>Stay in the Loop with SchediTix </b></p>
                <span>
                    <p>Get the Latest event planning tips, platform update, excutive officer, and</p>
                    <p>more, straight to your inbox. Sign up for our newsletters and never miss out</p>
                    <p>on exciting news and features.</p>
                </span>
            </div>
            <div className='stayinLoopInput'>
                <input type="text" placeholder='enter your email' className='inputDiv'/>
                <div className='subcribeBnt'>
                    <p><b>Subscribe</b></p>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default StayinLoop