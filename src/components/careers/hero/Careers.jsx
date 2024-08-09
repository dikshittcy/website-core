import React from 'react';
import './Careers.css';
import careersBannerImage from '../../../assets/images/careers-assets/banner-main.jpg';
import Careers1 from "../first-section/Careers1.jsx";
import Careers2 from "../second-section/Careers2.jsx";
import Careers3 from "../third-section/Careers3.jsx";
import Careers4 from "../fourth-section/Careers4.jsx";
import Careers5 from "../fifth-section/Careers5.jsx";
import Careers6 from "../sixth-section/Careers6.jsx";
import Careers7 from "../seventh-section/Careers7.jsx";

const Careers = () => {
    return (
        <div className="careers-page">
            <section className="careers-container" style={{backgroundImage: `url(${careersBannerImage})`}}>
                <div className="careers-content">
                    <h1 className="careers-headline">
                        Join the Exceptional Team at
                        <span className="careers-highlight">Thecodeyogi</span>
                    </h1>
                    <p className="careers-description">
                        At Thetechyogi, we’re more than just a digital marketing agency; we’re your dedicated partners
                        in growth and innovation.
                        Founded on the principles of creativity, strategy, and data-driven results, our mission is to
                        elevate your brand’s online presence and drive measurable success.
                    </p>
                    <button className="main-white-button">Apply Now</button>
                </div>
            </section>
            <Careers1/>
            <Careers2/>
            <Careers3/>
            <Careers4/>
            <Careers5/>
            <Careers6/>
            <Careers7/>
        </div>
    );
};

export default Careers;
