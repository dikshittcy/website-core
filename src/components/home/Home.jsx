import React from 'react';
import './Home.css';
import BannerImage from '../../assets/images/background/hero_section_background.png';
import DigitalMarketingImage from '../../assets/images/home-assets/service-image-1.png';
import SEOImage from '../../assets/images/home-assets/service-image-2.png';
import ContentMarketingImage from '../../assets/images/home-assets/service-image-3.png';
import UIUXImage from '../../assets/images/home-assets/service-image-4.png';
import AppDevelopmentImage from '../../assets/images/home-assets/service-image-5.png';
import WebDevelopmentImage from '../../assets/images/home-assets/service-image-6.png';
import WhyChooseUsSection from './benefits/WhyChooseUsSection';
import CustomerSection from './clients/Customers';
import Testimonials from "./testimonials/Testimonials";
import ContactSection from "./contact/ContactSection";

const Home = () => {
    return (
        <div className="home">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Digital Marketing That Delivers Result</h1>
                    <p>Discover the Power of Data-Driven Revenue Marketing, Maximizing Growth and ROI with Actionable
                        Insights.</p>
                    <button className="hero-button">Visit More</button>
                </div>
                <div className="hero-image">
                    <img src={BannerImage} alt="Marketing"/>
                </div>
            </section>

            <section className="services-section">
                <h2>Our <span>Services</span></h2>
                <div className="services-container">
                    <div className="service-card">
                        <img src={DigitalMarketingImage} alt="Digital Marketing"/>
                        <h3>Digital Marketing</h3>
                        <button className="service-button">View More</button>
                    </div>
                    <div className="service-card">
                        <img src={SEOImage} alt="Search Engine Optimization"/>
                        <h3>Search Engine Optimization</h3>
                        <button className="service-button">View More</button>
                    </div>
                    <div className="service-card">
                        <img src={ContentMarketingImage} alt="Content Marketing"/>
                        <h3>Content Marketing</h3>
                        <button className="service-button">View More</button>
                    </div>
                    <div className="service-card">
                        <img src={UIUXImage} alt="UIUX"/>
                        <h3>UIUX</h3>
                        <button className="service-button">View More</button>
                    </div>
                    <div className="service-card">
                        <img src={AppDevelopmentImage} alt="App Development"/>
                        <h3>App Development</h3>
                        <button className="service-button">View More</button>
                    </div>
                    <div className="service-card">
                        <img src={WebDevelopmentImage} alt="Web Development"/>
                        <h3>Web Development</h3>
                        <button className="service-button">View More</button>
                    </div>
                </div>
            </section>
            <WhyChooseUsSection/>
            <CustomerSection/>
            <Testimonials/>
            <ContactSection/>
        </div>
    );
};

export default Home;
