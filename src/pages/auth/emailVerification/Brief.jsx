import "./emailVerification.css"
import Logo from "../../../assets/orangelogo.png"




const Brief = () => {
  return (
    <div className="email-verification-container">
      <div className="Nav">
               <div className="signIn-Nav-Header">
                 {/* <div className="LogoBox">
                
                 </div> */}
                 {/* <div className="signIn-Nav-Box">
               <div className="navBoxs1"></div>
               <div className="navBoxs2"></div>
               </div> */}
               </div>
      </div>
      <div className="email-verification-body">
        <div className="email-verification-form">
          <div className="email-verification-form-Header">
          <img className="Logo" src={Logo} alt="" onClick={() => navigate("/")} />
          <h2 className="link-sub-text">Welcome to SchediTix!</h2>
          </div>
          <div className="form">
           
             <h3 className="link-text"> ✉️“We’ve sent a verification link to your email. 👉📩 Click it to confirm your account, then log in to start creating or attending unforgettable events with ShediTix. Can’t find the email? Be sure to check your spam or promotions folder too!”</h3> 
            
          </div>
        </div>
      </div>
      <div className="Nav2">
      {/* <div className="Nav-Box">
        <div className="navBoxs1"></div>
        <div className="navBoxs2"></div>
        </div> */}
      </div>
    </div>
  )
}

export default Brief
