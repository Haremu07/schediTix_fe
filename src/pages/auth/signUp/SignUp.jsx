import "./signUp.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { GiDialPadlock } from "react-icons/gi";
import { useNavigate } from "react-router";
import orangeLogo from "../../../assets/orangelogo.png";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import '../emailVerification/Brief'

const SignUP = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field],
    });
  };
  const [isloading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const BASEURL = "https://scheditix.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASEURL}/api/v1/register/user`,
        input
      );
      console.log(response);
      if (response.status === 201) {
        setTimeout(() => {
          toast.success(response.data.message );
          setIsLoading(false);
          navigate("/brief")
        }, 5000);
        if (input !== input) toast.success("omo run am bro");
        // const loadingState = toast.loading("Do the calms e don work....");
        // toast.dismiss(loadingState);
      }
    } catch (error) {
      if (input !== input) console.log("omooooo");
      const loadingState2 = toast.loading("Please wait....");
      toast.dismiss(loadingState2);
      toast.error(error?.response?.data?.message);
      if (error.status !== 201) {
        setIsLoading(false);
      }
    }
  };

  localStorage.setItem(`input`, JSON.stringify(input));
  const navigate = useNavigate();

  return (
    <div className="signIn-container">
      <Toaster />
      <div className="signIn-Nav">
        <div className="signIn-Nav-Header">
          <div className="LogoBox">
            <img
              className="Logo"
              src={orangeLogo}
              onClick={() => navigate("/")}
            />
          </div>
          <div className="signIn-Nav-Box">
            <div className="navBoxs1"></div>
            <div className="navBoxs2"></div>
          </div>
        </div>
      </div>
      <div className="signup-body">
        <div className="signup-form">
          <div className="sigup-form-Header">
            <h2>Unlock Your Event Access</h2>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <span className="input">
              <FaUser />
              <input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={handleChange}
                className="input3"
                placeholder="enter your fullname"
              />
            </span>
            <span className="input">
              <MdEmail />
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="input3"
                placeholder="enter your email"
              />
            </span>
            <span className="input">
              <IoMdCall />
              <p style={{ fontSize: "15px" }}>+234</p>
              <input
                type="number"
                name="phoneNo"
                value={input.phoneNo}
                onChange={handleChange}
                className="input3"
                placeholder="enter your phonenumber"
              />
            </span>
            <span className="input">
              <GiDialPadlock />
              <input
                type={showPasswords.old ? "text" : "password"}
                name="password"
                value={input.password}
                onChange={handleChange}
                className="input3"
                placeholder="enter your password"
              />
              <div className="EyeBox" onClick={() => togglePasswordVisibility("old")}>
              {showPasswords.old ? <FaEyeSlash /> : <FaEye />}
              </div>
            </span>

            <span className="input">
              <GiDialPadlock />
              <input
                type={showPasswords.new ? "text" : "password"}
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={handleChange}
                className="input3"
                placeholder="enter confirm password"
              />
              <div className="EyeBox" onClick={() => togglePasswordVisibility("new")}>
              {showPasswords.confirm ? <FaEyeSlash /> : <FaEye />}
              </div>
            </span>
            {isloading ? (
              <button type="submit" className="btnUp" style={{cursor: "not-allowed"}}  >
                Loading....
              </button>
            ) : (
              <button
                type="submit"
                className="btnUp"
                onClick={() => setIsLoading(true)}
              >
                Sign Up
              </button>
            )}
            <span className="signupBox2">
              <h5> Already have an account? </h5>
              <div className="boxes" onClick={() => navigate("/login")}>
                sign In
              </div>
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

export default SignUP;
