import "./signIn.css";
import { MdEmail } from "react-icons/md";
import { GiDialPadlock } from "react-icons/gi";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import orangeLogo from "../../../assets/orangelogo.png";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const BASEURL = "https://scheditix.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASEURL}/api/v1/login/user`, input)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="signin-container">
      <div className="signIn-Nav">
        <div className="signIn-Nav-Header">
          <div className="LogoBox">
            <img
              className="Logo"
              src={orangeLogo}
              alt=""
              onClick={() => navigate("/")}
            />
          </div>
          <div className="signIn-Nav-Box">
            <div className="navBoxs1"></div>
            <div className="navBoxs2"></div>
          </div>
        </div>
      </div>

      <div className="signin-body">
        <div className="signin-form">
         
          <div className="sigin-form-Header">
            <h2>Login to continue</h2>
          </div>
          <form className="form">
            <span className="input">
              <MdEmail />
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="input2"
                placeholder="enther your email"
              />
            </span>
            <span className="input">
              <GiDialPadlock />
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="input2"
                placeholder="enther your password"
              />
            </span>
            <h4
              onClick={() => navigate("/forget-password")}
              style={{ cursor: "pointer" }}
            >
              Forget password?
            </h4>
            <button type="submit" className="btn" onClick={handleSubmit}>
              Log In
            </button>
            <span className="signinBox">
              <h5>
                Dont have an account?
                <span className="box" onClick={() => navigate("/register")}>
                  sign Up
                </span>
              </h5>
            </span>
          </form>
        </div>
      </div>
      <div className="signIn-Nav2">
        <div className="signIn-Nav-Box">
          <div className="navBoxs1"></div>
          <div className="navBoxs2"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
