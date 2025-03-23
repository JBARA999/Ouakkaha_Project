import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ headline, subheadline, highlights, cta, backgroundImage }) => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="hero-content">
          <h1>{headline}</h1>
          <p className="subheadline">{subheadline}</p>
          
          <div className="highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          
          <Link to={cta.link} className="btn-primary">
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
