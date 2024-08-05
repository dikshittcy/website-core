import React from 'react';
import '../../seo/hero/SEO.css'
import UIUXHeroImage from '../../../../assets/images/uiux-assets/uiux_hero_image.png';
import UIUX1 from "../uiux-first-section/UIUX1.jsx";
import UIUX2 from "../uiux-second-section/UIUX2.jsx";
import UIUX3 from "../uiux-third-section/UIUX3.jsx";

const UIUX = () => {
    return (
        <div className="seo">
            <section className="seo-hero-container">
                <div className="seo-hero-image">
                    <img src={UIUXHeroImage} alt="Team working"/>
                </div>
                <div className="seo-hero-content">
                    <h1 className="seo-hero-title">UIUX Design</h1>
                    <p className="seo-hero-description">
                        When designing a UI/UX strategy for offering UI/UX design services
                        on your website, it's crucial to clearly convey the value you provide
                        and guide potential clients through a seamless journey. Here’s a
                        step-by-step approach tailored to presenting your UI/UX design
                        services effectively:
                    </p>
                    <div className="seo-hero-buttons">
                        <button className="main-contact-button">Request a demo</button>
                        <button className="main-white-button">Contact Us</button>
                    </div>
                </div>

            </section>
            <UIUX1/>
            <UIUX2/>
            <UIUX3/>
        </div>
    );
};

export default UIUX;
