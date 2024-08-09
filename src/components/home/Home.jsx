import React from 'react';
import './Home.css';
import BannerImage from '../../assets/images/background/hero_section_background.png';
import WhyChooseUsSection from './benefits/WhyChooseUsSection';
import CustomerSection from './clients/Customers';
import Testimonials from "./testimonials/Testimonials";
import ContactSection from "./contact/ContactSection";
import OurServices from "./our-service/OurServices.jsx";

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
            <OurServices/>
            <WhyChooseUsSection/>
            <CustomerSection/>
            <Testimonials/>
            <ContactSection/>
        </div>
    );
};

export default Home;
