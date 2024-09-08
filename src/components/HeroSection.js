import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={require('../images/logo.png')} alt="Evolvion Logo" className="hero-logo" />
        <h1>Welcome.</h1>
        <p>Redefining the Future with AI</p>
      </div>
    </div>
  );
}

export default HeroSection;
