import React, { useState } from 'react';
import './header.css';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import orangelogo from '../../assets/orangelogo.png';
// import purplelogo from '../../assets/purplelogo.png';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img className="logo-link" src={orangelogo || "/placeholder.svg"} alt="SchedTix" onClick={() => navigate("/")} />
        
        <nav className="nav">
          <a href="/event-categories" className="nav-link">
            Event Categories
          </a>
        </nav>
        <div className="search-box desktop-search">
          <input type="text" placeholder="Search events (tech,comedy,concerts...)" />
          <FiSearch className="search-icon" />
        </div>
        <div className="mobile-search">
          <FiSearch className="mobile-search-icon" />
        </div>
        <div className="actions desktop-actions">
          <button className="auth-button" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button className="auth-button" onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <FiMenu />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <img src={orangelogo || "/placeholder.svg"} alt="SchedTix" className="mobile-menu-logo" />
              <button className="mobile-menu-close" onClick={toggleMobileMenu}>
                <FiX />
              </button>
            </div>
            <div className="mobile-menu-items">
              <a href="/event-categories" className="mobile-menu-item" onClick={toggleMobileMenu}>
                Event Categories
              </a>
              <a href="/login" className="mobile-menu-item" onClick={toggleMobileMenu}>
                Sign In
              </a>
              <a href="/register" className="mobile-menu-item" onClick={toggleMobileMenu}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;