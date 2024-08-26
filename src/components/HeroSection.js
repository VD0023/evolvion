// import React from 'react';
// import './HeroSection.css';
// import '../images/logo.png';

// function HeroSection() {
//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <img src={require('../images/logo.png')} alt="Evolvion Logo" className="hero-logo" />
//         <div className="hero-text">
//           <h1>Welcome.</h1>
//           <p className="hero-tagline">Redefining the Future with AI</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


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
