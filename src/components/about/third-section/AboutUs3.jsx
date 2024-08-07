import React from 'react';
import './AboutUs3.css';
import weDoImage from '../../../assets/images/about-assets/about_us_man_image.png';

const AboutUs3 = () => {
    return (
        <div className="about-us3-container">
            <div className="about-us3-content">
                <h1>What <span className="highlight">We Do</span></h1>
                <p className="about-us3-subtitle">
                    Our services encompass a comprehensive suite of digital marketing solutions:-
                </p>
                <ul className="about-us3-services">
                    <li><span>Search Engine Optimization (SEO):</span> Boost your visibility and rank higher on search engines with our expert SEO strategies.</li>
                    <li><span>Pay-Per-Click (PPC) Advertising:</span> Drive targeted traffic and maximize ROI with our tailored PPC campaigns.</li>
                    <li><span>Social Media Marketing:</span> Engage and grow your audience across various social platforms with compelling content and strategic ad placements.</li>
                    <li><span>Content Marketing:</span> Crafting captivating content that resonates with your audience and builds brand authority.</li>
                    <li><span>Email Marketing:</span> Enhance customer retention and drive conversions with personalized email campaigns.</li>
                    <li><span>Web Design and Development:</span> Create a stunning online presence with our custom web design and development services.</li>
                </ul>
            </div>
            <div className="about-us3-image">
                <img src={weDoImage} alt="What We Do" />
            </div>
        </div>
    );
};

export default AboutUs3;
