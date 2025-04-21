
import "./emailVerification.css"
import orangeLogo from "../../../assets/orangelogo.png";
import { FadeLoader } from 'react-spinners'


const Verify = () => {
 
  return (
    <div className="email-verification-container">
      <div className="Nav">
        <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
      <div className="email-verification-body">
        <div className="email-verification-form">
          <div className="email-verification-form-Header">
         <img src={orangeLogo} alt="" />
          <p>🎉Welcome to SchediTix!🎉</p>
          </div>
          <form className="form">
          <div className='spin-bg'>
        <div className='spin-wrapper'>
            <div className='spin-text-holder'>
            <p className="Passage">"Hang tight! We’re verifying your email and unlocking your event access..."🥰.</p>
            </div>
            <div className='spin-holder'>
                <FadeLoader  className='loading-ico' />
            </div>
        </div>
      
    </div>
         
          </form>
        </div>
      </div>
      <div className="Nav2">
      <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div>
      </div>
    </div>
  )
}

export default Verify