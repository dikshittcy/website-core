import React from 'react';
import './AboutUs4.css';
import backgroundImage from '../../../assets/images/about-assets/two_hand_background_4th_section.png';

const AboutUs4 = () => {
    return (
        <div className="about-us4-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="about-us4-content">
                <div className="about-us4-text">
                    <p><span className="highlight">Customer-Centric Approach:</span> Your success is our success. We prioritize your needs and work closely with you to achieve your business objectives.</p>
                    <p><span className="highlight">Innovation:</span> Staying ahead of the curve is crucial in digital marketing. We continuously explore new techniques and tools to keep your brand at the forefront.</p>
                    <p><span className="highlight">Integrity:</span> Transparency and honesty guide our actions. We build long-term relationships based on trust and respect.</p>
                    <p><span className="highlight">Results:</span> Driven: We are committed to delivering measurable results. Our data-driven approach ensures that every strategy is optimized for success.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs4;
