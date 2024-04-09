import React from "react";
import "./Footer.css";
import logo from "./Assets/logo1.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
      
        </div>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
          fermentum ipsum. Sed placerat enim vitae risus molestie, vel blandit
          purus mattis. Ut venenatis nunc vitae felis lacinia faucibus.
        </p>
        <div className="social-icons">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="company">
          <h2 className="topic-heading">Our Technology</h2>
          <ul className="topic-list">
            <li>ReactJs</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="get-help">
          <h2 className="topic-heading">Our Services</h2>
          <ul className="topic-list">
            <li>Social media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
