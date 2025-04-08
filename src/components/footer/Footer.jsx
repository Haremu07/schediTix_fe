import React from 'react'
import "../footer/footer.css"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-heading">Quick links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Explore Categories</a>
              </li>
              <li>
                <a href="#">Event Categories</a>
              </li>
              <li>
                <a href="#">Subscription plan</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Faq</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Others</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Community program</a>
              </li>
              <li>
                <a href="#">conferences</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
              <li>
                <a href="#">Subscription plan</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Need any help?</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Office address: 204/205 muyibi street, Ajegunle, Olodi Apapa, Lagos, Nigeria.</span>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <span>Email us: cynthiadymonno04@gmail.com</span>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <span>Phone number: +2348041814551</span>
              </li>
              <li>
                <FaClock className="footer-icon" />
                <span>Office hours: 24hrs, Monday - Sunday</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 SchedTrix, Inc. All rights reserved.</p>
          <div className="footer-social">
            <a href="#">
              <FaTwitter />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer;