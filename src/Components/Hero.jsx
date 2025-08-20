import React from "react";
import homepageImage from "../assets/furnitures/homepage.jpg";

const Hero = () => {
  return (
    <main className="main-section">
      <img className="home-image" src={homepageImage} alt="Home" />
    </main>
  );
};

export default Hero;