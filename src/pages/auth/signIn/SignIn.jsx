import "./signIn.css";
import { MdEmail } from "react-icons/md";
import { GiDialPadlock } from "react-icons/gi";
import { useNavigate } from "react-router";
import orangeLogo from "../../../assets/orangelogo.png";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const BASEURL = "https://scheditix.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASEURL}/api/v1/login/user`, input)
      if(response.status === 200){
        setTimeout(() => {
          navigate("/checkin-as")
          setIsLoading(false)
        }, 3000)
      }
      console.log(response)
      
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      setIsLoading(false)

    }
  };

  return (
    <div className="signin-container">
      <Toaster/>
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
        <div className="signin-form" onSubmit={handleSubmit}>
         
          <div className="sigin-form-Header">
            <h2>Login to continue</h2>
          </div>
          <form className="form" >
            <span className="input">
              <MdEmail />
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="input2"
                placeholder="enter your email"
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
                placeholder="enter your password"
              />
            </span>
           
            <h4
              onClick={() => navigate("/forget-password")}
              style={{ cursor: "pointer" }}
            >
              Forgot password?
            </h4>
          {
            isLoading ? (
              <button type="submit" className="btn"
               >
                Loading...
              </button>
            ): (
              <button type="submit" className="btn"
               onClick={() => setIsLoading(true)}
               >
                {/* navigate("/checkin-as") */}
                Log In
              </button>
            )
          }
            <span className="signinBox" style={{display: "flex"}}>
              <h5>
                Dont have an account?
                <p className="boxs" onClick={() => navigate("/register")}>
                  sign Up
                </p>
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
