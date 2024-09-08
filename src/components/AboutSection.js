import React from 'react';
import './AboutSection.css';
import aboutPic from '../images/About-pic.jpg';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">At Evolvion, we believe in making AI accessible, intuitive, and elegant. Our solutions are designed to seamlessly integrate with your business, making AI both powerful and simple to use.</p>
        <img src={aboutPic} alt="AI Innovation" className="about-pic" />
        <p className="about-text">We are driven by the mission to empower businesses with cutting-edge AI technologies. Our team of experts is dedicated to delivering innovative solutions that challenge the status quo, helping you unlock new potentials and drive success in the ever-evolving digital landscape.</p>
        <p className="about-text">Join us in our journey to redefine the future with AI, where innovation meets simplicity, and technology serves as a catalyst for growth and transformation.</p>
      </div>
    </section>
  );
}

export default AboutSection;