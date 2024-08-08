import React from 'react';
import './ContactUs2.css';
import contactUsPhoneIcon from '../../../assets/images/contact-assets/call (1).png';
import contactUsMailIcon from '../../../assets/images/contact-assets/email (1).png';
import contactUsLocationIcon from '../../../assets/images/contact-assets/home.png';

const ContactUs2 = () => (
    <div className="contact-us2-container">
        <div className="contact-us2-card">
            <img src={contactUsPhoneIcon} alt="Phone" className="contact-us2-icon"/>
            <h3>Call us</h3>
            <p>+91-1234-123-123</p>
            <p>+91-1234-123-123</p>
            <button className="contact-us2-button">Call us</button>
        </div>
        <div className="contact-us2-card">
            <img src={contactUsMailIcon} alt="Mail" className="contact-us2-icon"/>
            <h3>Mail Us</h3>
            <p>info@thecodeyogi.in</p>
            <p>@Thecodeyogihr.in</p>
            <button className="contact-us2-button">Email us</button>
        </div>
        <div className="contact-us2-card">
            <img src={contactUsLocationIcon} alt="Location" className="contact-us2-icon"/>
            <h3>Mail Us</h3>
            <p>Captain Vijyant Thapar Marg,</p>
            <p>Noida Sector 16, Pocket E,</p>
            <p>Noida, Uttar Pradesh 201301</p>
        </div>
    </div>
);

export default ContactUs2;
