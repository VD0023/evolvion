import React from 'react';
import './Header.css';
import '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={'../images/logo.png'} alt="Evolvion Logo" className="logo" />
        <div className="header-text">
          <h1>Evolvion</h1>
          <h2>AI</h2>
          <h2>Agency</h2>
        </div>
      </div>
      <nav className="nav-links">
      </nav>
    </header>
  );
}

export default Header;
