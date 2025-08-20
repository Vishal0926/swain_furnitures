import React from "react";
import { Link } from "react-router-dom";
import "../Styles/about.css";

import workshopImage from "../assets/about/Workshop.jpg";

const About = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Swain Furnitures</h1>
          <p>Crafting Comfort & Luxury Since 1997</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At <strong>Swain Furnitures</strong>, we believe your home should tell your story.
            Since our humble beginnings in 1997, we have been crafting premium furniture
            that combines timeless design with modern comfort. Initially available only
            offline, we proudly stepped into the online world in 2024 to bring our
            collections to homes nationwide.
          </p>
          <p>
            Founded by the <strong>Swain Brothers</strong>, our mission is to blend elegance,
            quality, and affordability — helping you create spaces you'll love for a lifetime.
          </p>
        </div>
        <div className="about-image">
          <img src={workshopImage} alt="Swain Furnitures Workshop" />
        </div>
      </section>

      <section className="mission-values">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>To make luxury furniture accessible without compromising on quality or craftsmanship.</p>
        </div>
        <div className="values">
          <h3>Our Values</h3>
          <ul>
            <li>✔ Premium Quality Materials</li>
            <li>✔ Sustainable Crafting</li>
            <li>✔ Customer First Approach</li>
            <li>✔ Affordable Luxury</li>
          </ul>
        </div>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <span className="year">1997</span>
            <p>Swain Furnitures was founded, serving local customers offline.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2010</span>
            <p>Expanded showrooms across multiple cities.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>Launched our premium online furniture store.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2025</span>
            <p>Serving happy customers nationwide with love & care.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Transform Your Home Today</h2>
        <p>Discover our exclusive collection of premium furniture and bring comfort & style to your space.</p>
        <Link to="/" className="cta-btn">Shop Now</Link>
      </section>
    </>
  );
};

export default About;
