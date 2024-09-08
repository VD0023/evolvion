import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send('service_3cu3itw', 'template_4u0yqvb', emailParams, 'l4bqouxBdLt7JViHp')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-us-section">
            <h2>Contact Us</h2>
            <form onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Enquiry</label>
                    <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange} 
                        required 
                    ></textarea>
                </div>
                <button type="submit" className="send-button">Send Message</button>
                {emailSent && <p className="success-message">Email sent successfully!</p>}
            </form>
        </div>
    );
};

export default ContactSection;