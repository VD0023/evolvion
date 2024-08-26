import React from 'react';
import './CaseStudiesSection.css'; // Ensure this file exists in the same directory

const CaseStudiesSection = () => {
  return (
    <section className="case-studies">
      <h2>Client Success Stories</h2>
      <div className="success-stories">
        <div className="success-item">
          <h3>Success Story 1</h3>
          <p>Details about the success story, client testimonial, or outcome.</p>
        </div>
        <div className="success-item">
          <h3>Success Story 2</h3>
          <p>Details about the success story, client testimonial, or outcome.</p>
        </div>
        <div className="success-item">
          <h3>Success Story 3</h3>
          <p>Details about the success story, client testimonial, or outcome.</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
