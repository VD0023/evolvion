import React from 'react';
import './CaseStudiesSection.css'; 

const CaseStudiesSection = () => {
  return (
    <section className="case-studies">
      <h2>Client Success Stories</h2>
      <div className="success-stories">
        
        <div className="success-item">
          <h3>Success Story: Transforming Data Efficiency for Financial Institutions</h3>
          <p>
            <strong>Client:</strong> FinCorp Solutions <br />
            <strong>Challenge:</strong> FinCorp was struggling to process large volumes of financial data, which led to inefficiencies and delayed decision-making. <br />
            <strong>Solution:</strong> Evolvion implemented a custom AI-powered data processing system that reduced manual work by 80% and increased reporting speed by 50%. <br />
            <strong>Testimonial:</strong> "Evolvion's AI solutions completely transformed our data processing. We've reduced errors, streamlined operations, and are now more responsive to market changes than ever before." – John Smith, CTO of FinCorp.
          </p>
        </div>

        <div className="success-item">
          <h3>Success Story: Enhancing Customer Experience with AI Chatbots</h3>
          <p>
            <strong>Client:</strong> HealthCare Now <br />
            <strong>Challenge:</strong> HealthCare Now wanted to offer 24/7 customer support to handle inquiries without overburdening their staff. <br />
            <strong>Solution:</strong> Evolvion introduced an AI chatbot that could resolve 70% of customer queries autonomously, while integrating with live agents for more complex issues. <br />
            <strong>Testimonial:</strong> "The AI chatbot not only provided faster responses for our clients but also allowed our team to focus on more critical tasks. Evolvion's solution exceeded our expectations!" – Sarah Thompson, Customer Service Director at HealthCare Now.
          </p>
        </div>

        <div className="success-item">
          <h3>Success Story: Optimizing Inventory Management with AI</h3>
          <p>
            <strong>Client:</strong> RetailRevamp <br />
            <strong>Challenge:</strong> RetailRevamp faced challenges in predicting demand and maintaining optimal stock levels across multiple locations. <br />
            <strong>Solution:</strong> Evolvion deployed a machine learning model that forecasted demand based on historical data and market trends, reducing overstock and stockouts by 35%. <br />
            <strong>Testimonial:</strong> "Thanks to Evolvion’s AI-driven demand forecasting, we’ve significantly improved our inventory management and saved on excess inventory costs. Highly recommended!" – Michael Lee, Operations Manager at RetailRevamp.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;