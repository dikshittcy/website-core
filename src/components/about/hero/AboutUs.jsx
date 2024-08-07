import React from 'react';
import './AboutUs.css';
import aboutUsBannerImage from '../../../assets/images/about-assets/about_banner_image.png';
import AboutUs1 from "../first-section/AboutUs1.jsx";
import AboutUs2 from "../second-section/AboutUs2.jsx";
import AboutUs3 from "../third-section/AboutUs3.jsx";
import AboutUs4 from "../fourth-section/AboutUs4.jsx";
import AboutUs5 from "../fifth-section/AboutUs5.jsx";
import AboutUs6 from "../sixth-section/AboutUs6.jsx";

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <section className="about-us-container" style={{backgroundImage: `url(${aboutUsBannerImage})`}}>
                <div className="about-us-content">
                    <h1>Welcome to Thetechyogi</h1>
                    <p className="about-us-subtitle">where digital dreams turn into reality!</p>
                    <p className="about-us-description">
                        At Thetechyogi, we’re more than just a digital marketing agency; we’re your dedicated partners
                        in growth and innovation.
                        Founded on the principles of creativity, strategy, and data-driven results, our mission is to
                        elevate your brand’s online presence and drive measurable success.
                    </p>
                    <button className="main-white-button">Contact Us</button>
                </div>
            </section>
            <AboutUs1/>
            <AboutUs2/>
            <AboutUs3/>
            <AboutUs4/>
            <AboutUs5/>
            <AboutUs6/>
        </div>
    );
};

export default AboutUs;
