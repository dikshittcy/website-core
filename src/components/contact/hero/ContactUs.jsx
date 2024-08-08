import React from 'react';
import './ContactUs.css';
import contactUsBackgroundImage from '../../../assets/images/contact-assets/contact_us_hero_background_image.png';
import ContactUs1 from "../first-section/ContactUs1.jsx";
import ContactSection from "../../home/contact/ContactSection.jsx";
import ContactUs2 from "../second-section/ContactUs2.jsx";
import ContactUs3 from "../third-section/ContactUs3.jsx";

const ContactUs = () => {
    return (
        <div className="conatct-us">
            <section className="contact-us-section" style={{backgroundImage: `url(${contactUsBackgroundImage})`}}>
                <div className="contact-us-overlay"></div>
                <div className="contact-us-content">
                    <h1>Contact Us Today</h1>
                    <div className="contact-us-underline"></div>
                </div>
            </section>
            <ContactUs1/>
            <ContactSection/>
            <ContactUs2/>
            <ContactUs3/>
        </div>
    );
};

export default ContactUs;
