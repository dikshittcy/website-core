import React from 'react';
import '../../seo/hero/SEO.css';
import DigitalMarketingHeroImage from '../../../../assets/images/digital-marketing-assets/digital_hero_image.png';
import DigitalMarketing1 from "../digital-first-section/DigitalMarketing1.jsx";
import DigitalMarketing2 from "../digital-second-section/DigitalMarketing2.jsx";

const DigitalMarketing = () => {
    return (
        <div className="seo">
            <section className="seo-hero-container">
                <div className="seo-hero-image">
                    <img src={DigitalMarketingHeroImage} alt="Team working"/>
                </div>
                <div className="seo-hero-content">
                    <h1 className="seo-hero-title">DIGITAL MARKETING</h1>
                    <p className="seo-hero-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                    </p>
                    <div className="seo-hero-buttons">
                        <button className="main-contact-button">Request a demo</button>
                        <button className="main-white-button">Contact Us</button>
                    </div>
                </div>
            </section>
            <DigitalMarketing1/>
            <DigitalMarketing2/>
        </div>
    );
};

export default DigitalMarketing;
