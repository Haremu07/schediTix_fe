import React, {useState}from 'react';
import '../header/header.css';
import {FiSearch, FiMenu, FiX} from 'react-icons/fi';
import { useNavigate } from 'react-router';
import orangelogo from '../../assets/orangelogo.png'

const Header = () => {
 const  navigate = useNavigate();
 const [menuOpen, setMenuOpen] = useState(false);
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
            <p className='nav-link' onClick={() => navigate("/dashboard/create-event")}>Create Event</p>
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
        <div className='mobile-menu-icon' onClick={() => setMenuOpen(true)}>
          <FiMenu size={26} />
        </div>

      </div>
      {menuOpen && (
        <div className="mobile-dropdown">
          <div className="mobile-header-top">
            <img className="logo-link" src={orangelogo} alt="SchediTix logo" />
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <FiX size={26} />
            </button>
          </div>
          <a onClick={() => { navigate('/event-categories'); setMenuOpen(false); }}>Event Categories</a>
          {!token ? (
         
            <>
              <a onClick={() => { navigate('/login'); setMenuOpen(false); }}>Sign In </a>
              <a onClick={() => { navigate('/register'); setMenuOpen(false); }}>Sign Up</a>
            </>
          ) : (
            <>
              <a onClick={() => { navigate('/dashboard/Upcoming-events'); setMenuOpen(false); }}>My Events</a>
              <a onClick={() => { navigate('/dashboard/overview'); setMenuOpen(false); }}>Overview</a>
              <a onClick={() => { navigate('/dashboard/profile'); setMenuOpen(false); }}>
                {input?.fullname?.charAt(0)}
              </a>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
