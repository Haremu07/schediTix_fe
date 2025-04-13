import "./resetPassword.css";
import { GiDialPadlock } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import orangeLogo from "../../assets/orangelogo.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);
    setError("");

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

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
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
              <FaArrowLeft />
              <p>go back</p>
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
                  type="password"
                  className="input2"
                  placeholder="New password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </span>

              <span className="input">
                <GiDialPadlock />
                <input
                  type="password"
                  className="input2"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </span>

              <button type="submit" className="btn" disabled={loading}>
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
