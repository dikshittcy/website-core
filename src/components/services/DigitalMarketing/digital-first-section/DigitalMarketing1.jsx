import React from 'react';
import './DigitalMarketing1.css';

const DigitalMarketing1 = () => {
    const features = [
        {
            title: 'KEYWORD RESEARCH',
            description: 'Our SEO team will gather thousands of different keywords and pull a number of metrics to determine a keyword’s potential value. These include search volume, our own proprietary competitive formula, and other different variables in order to determine how valuable these keywords are for different pages on your website.',
            iconClass: 'digital-marketing-icon-keyword-research'
        },
        {
            title: 'ON-SITE OPTIMIZATION',
            description: 'We will strategically and gracefully recommend how to infuse the SEO strategy onto your website’s pages. From there, we’ll audit your site’s overall structure and functionality, making the site’s experience optimal for both Google and your end users. These days, user experience and SEO go hand in hand and it will improve your ability to rank.',
            iconClass: 'digital-marketing-icon-on-site-optimization'
        },
        {
            title: 'LINK BUILDING',
            description: 'Our SEO team will gather thousands of different keywords and pull a number of metrics to determine a keyword’s potential value. These include search volume, our own proprietary competitive formula, and other different variables in order to determine how valuable these keywords are for different pages on your website.',
            iconClass: 'digital-marketing-icon-link-building'
        },
        {
            title: 'CONTENT STRATEGY',
            description: 'Our SEO team will gather thousands of different keywords and pull a number of metrics to determine a keyword’s potential value. These include search volume, our own proprietary competitive formula, and other different variables in order to determine how valuable these keywords are for different pages on your website.',
            iconClass: 'digital-marketing-icon-content-strategy'
        },
    ];

    return (
        <div className="digital-marketing-features">
            <h2 className="digital-marketing-features-title">Our <span>Strategy</span></h2>
            <div className="digital-marketing-features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="digital-marketing-feature-card">
                        <div className="digital-marketing-feature-icon-wrapper">
                            <div className={`digital-marketing-feature-icon ${feature.iconClass}`}></div>
                        </div>
                        <h3 className="digital-marketing-feature-title">{feature.title}</h3>
                        <p className="digital-marketing-feature-description">{feature.description}</p>
                        <button className="main-white-button">Contact Us</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DigitalMarketing1;
