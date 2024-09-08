import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Evolvion AI Agency</h2>
      </div>
      <div className="footer-right">
        <p>© {new Date().getFullYear()} Evolvion. All rights reserved.</p>
        <div className="footer-links">
          <button onClick={() => alert('Privacy Policy coming soon!')} className="footer-link">
            Privacy Policy
          </button>
          <button onClick={() => alert('Terms of Service coming soon!')} className="footer-link">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;