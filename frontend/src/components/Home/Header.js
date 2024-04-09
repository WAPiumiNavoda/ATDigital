import React from "react";
import "./Header.css";
import logo from "../../Assets/logo1.png";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div className="header-container">
      <a href="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
  
      </a>
      <div className="tab-container">
        <a href="/" className="tab">
          SERVICES
        </a>
        <a href="/" className="tab">
          ABOUTUS
        </a>
        <a href="/" className="tab">
          CoNTACTUS
        </a>
        <a href="/" className="tab">
          CAREERS
        </a>
      </div>
      {/* <div className="button-container">
        <a href="/user-login" className="button login-button">
          Login
        </a>
        <a href="/" className="button login-button">
          Logout
        </a>
        <a href="/user-register" className="button signup-button">
          Sign Up
        </a>
      </div> */}
    </div>
  );
}

export default Header;
