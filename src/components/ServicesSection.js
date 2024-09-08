import React, { useEffect } from 'react';
import './ServicesSection.css';

const Services = () => {
    useEffect(() => {
        const handleScroll = () => {
            const boxes = document.querySelectorAll('.service-box');
            const triggerBottom = window.innerHeight / 5 * 4;

            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < triggerBottom) {
                    box.classList.add('visible');
                } else {
                    box.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="services-section">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service-box">
                    <h3>AI Consulting</h3>
                    <p>We offer personalized AI strategies tailored to your business to help you achieve your goals efficiently.</p>
                </div>
                <div className="service-box">
                    <h3>Machine Learning Models</h3>
                    <p>Our expert team builds and deploys custom machine learning models for various industries and applications.</p>
                </div>
                <div className="service-box">
                    <h3>Data Analysis</h3>
                    <p>Gain deep insights from your data through our comprehensive data analysis services.</p>
                </div>
                <div className="service-box">
                    <h3>Natural Language Processing</h3>
                    <p>Enhance your business with advanced NLP solutions, including chatbots, sentiment analysis, and more.</p>
                </div>
                <div className="service-box">
                    <h3>Computer Vision</h3>
                    <p>Automate visual data interpretation with state-of-the-art computer vision technology.</p>
                </div>
                <div className="service-box">
                    <h3>Cloud AI Solutions</h3>
                    <p>Leverage cloud AI for scalable, secure, and efficient AI implementations across your operations.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;