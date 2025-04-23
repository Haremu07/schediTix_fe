import "./resetPassword.css";
import { GiDialPadlock } from "react-icons/gi";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import orangeLogo from "../../assets/orangelogo.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword]=useState(false);
  const [showConfirmPassword, setShowConfirmPassword]= useState(false);
  const { token } = useParams(); 
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

  if (!token){
    setError("Invalid or Expired reset link");
    return;
  }
  if (newPassword !== confirmPassword){
    setError ("Passwords don't match.");
    return;
  }
  if (newPassword.length < 8){
    setError("Password must be at least 8 characters long .");
    return;
  }
  setLoading(true)
    try {
      const response = await fetch(`https://scheditix.onrender.com/api/v1/reset-password/user/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword,
          confirmPassword,
        }),
      });

      const data = await response.json();

     if (!response.ok){
      window.scrollTo({top: 0,behavior: "smooth"});
      const errorMessage = data.message || data.error || "Failed to reset password .";
      if (errorMessage.toLowerCase (). includes("expired") || errorMessage.toLowerCase ().includes ("invalid")) {
        setError(errorMessage);
        setTimeout(() => {
          navigate("/forget-password");
        }, 3000);
        return;
      }
      throw new Error (errorMessage);
      
     }
     setSuccess(true);
     setTimeout(()=> navigate("/login"), 2000);
    } catch (err){
      console.error("Reset error:", err);
      if (err instanceof Error){
        setError(err.message);
      }else{
        setError("An unespected error occured .")
      }
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="ResetPassword-container">
      <div className="Nav">
        <div className="signIn-Nav-Header">
          <div className="LogoBox">
            <img className="Logo" src={orangeLogo} alt="logo" onClick={() => navigate("/")} />

          </div>
          <div className="signIn-Nav-Box">
            <div className="navBoxs1"></div>
            <div className="navBoxs2"></div>
          </div>
        </div>
      </div>

      <div className="ResetPassword-body">
        <div className="ResetPassword-form">
          <div className="ResetPassword-form-Header">
            <span className="Back" onClick={() => navigate("/reset-password")}>

            </span>
            <h2>Set your new password</h2>
            <p>Choose a strong password to secure your account</p>
          </div>

          {success ? (
            <div className="success-message">
              <p>Password successfully reset! Redirecting to login...</p>
              <p>If not redirected <button onClick={() => navigate("/login")}>click here</button>.</p>

            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              {error && <div className="error-message">{error}</div>}

              
              <span className="input">
                <GiDialPadlock />
                <input 
                  type={showPassword ? "text" : "password"}
                  className="input2" 
                  placeholder="New password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span className="eye-icon" onClick={() =>setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye/>}
                </span>
              </span>


              <span className="input">
                <GiDialPadlock />
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  className="input2" 
                  placeholder="Confirm password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                 <span className="eye-icon" onClick={() =>setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye/>}
                 </span>
              </span>

              
              <button 
                type="submit" 
                className="btn" 
                disabled={loading}
              >
                {loading ? "Processing..." : "Save Password"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="Nav2">
        <div className="Nav-Box">
          <div className="navBoxs1"></div>
          <div className="navBoxs2"></div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

