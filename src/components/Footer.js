import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Evolvion AI Agency</h2>
        <p className="footer-why">Challenging the status quo, one innovation at a time.</p>
        <div className="footer-details">
          <p>Address: Sydney, AUS</p>
          <p>Contact: evolvionai@gmail.com</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
