import React from 'react';
import './AboutUs2.css';
import aboutUs2storyImage from '../../../assets/images/about-assets/about_us_strategy_image.png';

const AboutUs2 = () => {
    return (
        <div className="about-us2-container">
            <div className="about-us2-image">
                <img src={aboutUs2storyImage} alt="Story"/>
            </div>
            <div className="about-us2-content">
                <h1>Our <span className="highlight">Philosophy</span></h1>
                <p className="about-us2-description">
                    We believe in the power of digital marketing to transform businesses. Our approach is centered
                    around
                    understanding your unique goals, crafting tailored strategies, and executing with precision. We
                    don’t just
                    follow trends; we set them. By combining innovative techniques with cutting-edge technology, we
                    ensure
                    that your brand stands out in a crowded digital landscape.
                </p>
                <button className="main-white-button">Contact Us</button>
            </div>
        </div>
    );
};

export default AboutUs2;
