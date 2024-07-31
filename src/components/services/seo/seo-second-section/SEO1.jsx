import React from 'react';
import './SEO1.css';
import SeoHeroImage1 from '../../../../assets/images/seo-assets/2ND SECTION IMAGE.png';

const SEO1 = () => {
    return (
        <div className="seo-hero-section">
            <div className="seo-hero-content">
                <h1 className="seo-hero-title">
                    <span className="seo-hero-title-bold">SEO</span> Services
                    <div className="seo-hero-title-underline"></div>
                </h1>
                <h2 className="seo-hero-subtitle">Search Engine Optimization</h2>
                <p className="seo-hero-description">
                    Our SEO strategists are readily equipped with the passion, knowledge, and skill set needed to carry your website on an upward trajectory through Google and other major search engines. Invest in our team and you'll get the experience and expertise needed to bring qualified users to your business.
                </p>
                <button className="main-white-button">Contact Us</button>
            </div>
            <div className="seo-hero-image">
                <img src={SeoHeroImage1} alt="SEO Ranking" />
            </div>
        </div>
    );
};

export default SEO1;
