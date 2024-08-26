import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
