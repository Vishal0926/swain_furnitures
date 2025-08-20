import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <Link to="/">HOME</Link>
      <Link to="/Livingroom">LIVING ROOM</Link>
      <Link to="/Bedroom">BEDROOM</Link>
      <Link to="/Diningroom">DINING ROOM</Link>
      <Link to="/Sleep">SLEEP</Link>
      <Link to="/Outdoor">OUTDOOR</Link>
      <Link to="/Baby_kids">BABY & KIDS</Link>
      <Link to="/Home_office">HOME OFFICE</Link>
      <Link to="/Decor">DECOR</Link>
      <Link to="/Deals" className="deals">DEALS</Link>
      <Link to="/Inspiration">INSPIRATION</Link>
      <Link to="/About">ABOUT</Link>
    </nav>
  );
};

export default Navbar;
