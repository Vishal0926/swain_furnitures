import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/furnitures/app icon.png";

const Header = () => {
  return (
    <header className="header">
      <div id="maindiv">
        <div className="appname">
          <h1>SWAIN</h1>
          <h1>FURNITURE</h1>
        </div>
        <div className="applogo">
          <img id="applogo" src={appLogo} alt="applogo" />
        </div>
        <div className="search-container">
          <input type="text" className="search-box" placeholder="Search..." />
          <button className="search-button">🔍</button>
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="btn">
            Log In
          </Link>
          <Link to="/signup" className="btn signup">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
