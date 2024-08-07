import React from 'react';
import './AboutUs6.css';
import lastSectionWhyChooseUsImage from '../../../assets/images/about-assets/about_us_last_section_image.png';

const AboutUs6 = () => {
    return (
        <div className="about-us6-container">
            <div className="about-us6-content">
                <div className="about-us6-image">
                    <img src={lastSectionWhyChooseUsImage} alt="Why Choose Us?"/>
                </div>
                <div className="about-us6-text">
                    <h1>
                        Why <span className="highlight">Choose us?</span>
                    </h1>
                    <p>Choosing TheCodeYogi means partnering with a team that is as invested in your success as you are.
                        We go beyond traditional marketing tactics, focusing on innovative solutions that make a lasting
                        impact. With a commitment to excellence and a relentless pursuit of growth, we’re here to help
                        your brand achieve its full potential.</p>
                    <p>Let's embark on this journey together. Contact us today to discover how we can elevate your
                        digital presence and drive your business forward.</p>
                    <button className="main-white-button">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs6;
