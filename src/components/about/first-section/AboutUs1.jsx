import React from 'react';
import './AboutUs1.css';
import aboutUs1storyImage from '../../../assets/images/about-assets/about_us_puzzle_image.png';

const AboutUs1 = () => {
    return (
        <div className="about-us1-container">
            <div className="about-us1-content">
                <h1>Our <span className="highlight">Story</span></h1>
                <p className="about-us1-description">
                    What began as a small team of passionate marketers has grown into a full-fledged agency
                    with a diverse range of talents. With over 5 years in the industry, our team brings a wealth
                    of experience and a proven track record to every project we undertake. From humble beginnings,
                    we’ve evolved into a leader in digital marketing, consistently delivering exceptional results for
                    our clients.
                </p>
                <button className="main-white-button">Contact Us</button>
            </div>
            <div className="about-us1-image">
                <img src={aboutUs1storyImage} alt="Story"/>
            </div>
        </div>
    );
};

export default AboutUs1;
