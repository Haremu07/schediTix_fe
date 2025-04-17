import "./signIn.css";
import { MdEmail } from "react-icons/md";
import { GiDialPadlock } from "react-icons/gi";
import { useNavigate, useParams } from "react-router";
import orangeLogo from "../../../assets/orangelogo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  // const [disable, setDisable] = useState(false);

  const BASEURL = "https://scheditix.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASEURL}/api/v1/login/user/`, {
        email,
        password,
      });
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        localStorage.setItem("userToken", (response.data.token));
        setTimeout(() => {
          setIsLoading(false);
          navigate("/checkin-as");
        }, 3000);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit()
  },[])

  return (
    <div className="signin-container">
      <Toaster />
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
          <form className="form">
            <span className="input">
              <MdEmail />
              <input
                type="email"
                // name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input2"
                placeholder="enter your email"
              />
            </span>
            <span className="input">
              <GiDialPadlock />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {isLoading ? (
              <button type="submit" className="btn">
                Loading...
                
              </button>

            ) : (
              <button
                type="submit"
                className="btn"
                onClick={() => {
                  setIsLoading(true),
                    setTimeout(() => {
                    }, 3000);
                }}
              >

                Log In
              </button>
            )}

            {/* {disable ? isLoading : null} */}
            <span
              className="signinBox"
              // style={{ display: "flex", flexDirection: "row" }}
            >
              <h5>
                Dont have an account?</h5>
                <p className="boxed" onClick={() => navigate("/register")}>
                  sign Up
                </p>
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
