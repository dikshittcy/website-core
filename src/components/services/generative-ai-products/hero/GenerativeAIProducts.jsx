import React from 'react';
import '../../seo/hero/SEO.css';
import SeoHeroImage from '../../../../assets/images/seo-assets/seo_hero_section_image.png';
import GenerativeAIProducts2 from "../second-section/GenerativeAIProducts2.jsx";


const GenerativeAIProducts = () => {
    return (
        <div className="seo">
            <section className="seo-hero-container">
                <div className="seo-hero-image">
                    <img src={SeoHeroImage} alt="Team working"/>
                </div>
                <div className="seo-hero-content">
                    <h1 className="seo-hero-title">Generative AI Products</h1>
                    <p className="seo-hero-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                        the
                        leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div className="seo-hero-buttons">
                        <button className="main-contact-button">Request a demo</button>
                        <button className="main-white-button">Contact Us</button>
                    </div>
                </div>

            </section>
            <GenerativeAIProducts2/>
        </div>
    );
};

export default GenerativeAIProducts;
