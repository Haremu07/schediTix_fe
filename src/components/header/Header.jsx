import React from 'react';
import '../header/header.css';
import {FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import orangelogo from '../../assets/orangelogo.png'

const Header = () => {
 const  navigate = useNavigate();
 const input = JSON.parse(localStorage.getItem(`userData`))
// const user = input ? JSON.parse(input) : null
const token= localStorage.getItem(`userToken`)

console.log(input)
  return (
    <header className="header">
      <div className="header-container">
          <img className="logo-link"src={orangelogo} alt="" onClick={() => navigate("/")} />
        <nav className="nav">
          <a href="/event-categories" className="nav-link">
            Event Categories
          </a>
        {
          token ? (
            <>
            <p className='nav-link' onClick={() => navigate("/dashboard/Upcoming-events")}>My Events</p>
            <p className='nav-link' onClick={() => navigate("/dashboard/overview")}>Overview</p>
            </>
          ) : null
        }
        </nav>

        {
          token ?  null : (
            <div className="search-box">
          <input type="text" placeholder="Search events (tech,comedy,concerts...)" />
          <FiSearch className="search-icon" />
        </div>
          ) 
        }
        {
          token  ?  (
            <div className="CirclrBox" onClick={() => navigate("/dashboard/profile")}>
              {/* <img className='CirclrBoxImg' src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" alt="" /> */}
          <h2>{input.fullname.charAt(0)}</h2>
            </div>
          ) : (
            <div className="actions">
            <button className="auth-button" 
            onClick={() => navigate("/login")}
            >Sign In</button>
            <button className="auth-button" 
            onClick={() => navigate("/register")}
            >Sign Up</button>
          </div>
          ) 
        }
      </div>
    </header>
  );
};

export default Header;
