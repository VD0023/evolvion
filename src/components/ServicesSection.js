import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>Empowering businesses with cutting-edge AI solutions, from custom tools to AI-driven consulting, we help you unlock new potentials and drive success.</p>
      <div className="services-grid">
        <div className="service-item1">
          <h3>AI Consulting</h3>
          <p>Expert AI strategies tailored for your business.</p>
        </div>
        <div className="service-item2">
          <h3>Custom AI Solutions</h3>
          <p>Building AI tools that fit your unique needs.</p>
        </div>
        <div className="service-item3">
          <h3>Data Science</h3>
          <p>Unlock the full potential of your data.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
