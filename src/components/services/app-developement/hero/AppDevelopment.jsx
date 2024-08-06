import React from 'react';
import '../../seo/hero/SEO.css'
import UIUXHeroImage from '../../../../assets/images/app-development-assets/app_developement_hero_image.png'
import AppDevelopment1 from "../first-section/AppDevelopment1.jsx";
import AppDevelopment2 from "../second-section/AppDevelopment2.jsx";
import AppDevelopment3 from "../third-section/AppDevelopment3.jsx";
import AppDevelopment4 from "../fourth-section/AppDevelopment4.jsx";
import AppDevelopment5 from "../fifth-section/AppDevelopment5.jsx";


const AppDevelopment = () => {
    return (
        <div className="seo">
            <section className="seo-hero-container">
                <div className="seo-hero-image">
                    <img src={UIUXHeroImage} alt="Team working"/>
                </div>
                <div className="seo-hero-content">
                    <h1 className="seo-hero-title">App Development</h1>
                    <p className="seo-hero-description">
                        At Thetechyogi, we specialize in turning visionary concepts
                        into high-performing mobile and web applications. Our comprehensive
                        app development services are designed to meet your business goals
                        and exceed user expectations.
                    </p>
                    <div className="seo-hero-buttons">
                        <button className="main-contact-button">Request a demo</button>
                        <button className="main-white-button">Contact Us</button>
                    </div>
                </div>

            </section>
            <AppDevelopment1/>
            <AppDevelopment2/>
            <AppDevelopment3/>
            <AppDevelopment4/>
            <AppDevelopment5/>
        </div>
    );
};

export default AppDevelopment;
