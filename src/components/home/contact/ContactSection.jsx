import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="contact-form-container">
                <h2 className="contact-heading">
                    Get in <span>touch</span>
                </h2>
                <form className="contact-form">
                    <input type="text" placeholder="Full Name" className="contact-input-name" />
                    <input type="text" placeholder="Phone Number" className="contact-input-phone" />
                    <input type="email" placeholder="Email Address" className="contact-input-email" />
                    <select className="contact-input-service">
                        <option value="" disabled selected>Select Service</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="generative-ai">Generative AI Products</option>
                        <option value="ui-ux">UI/UX</option>
                        <option value="app-development">App Development</option>
                        <option value="web-development">Web Development</option>
                    </select>
                    <textarea placeholder="Message" className="contact-input-message"></textarea>
                    <button type="submit" className="contact-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
