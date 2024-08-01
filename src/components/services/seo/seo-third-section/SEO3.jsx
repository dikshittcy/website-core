import React from 'react';
import './SEO3.css';

const SEO3 = () => {
    const features = [
        {
            title: 'KEYWORD RESEARCH',
            description: 'Our SEO team will gather thousands of different keywords and pull a number of metrics to determine a keyword’s potential value. These include search volume, our own proprietary competitive formula, and other different variables in order to determine how valuable these keywords are for different pages on your website.',
            iconClass: 'icon-keyword-research'
        },
        {
            title: 'ON-SITE OPTIMIZATION',
            description: 'We will strategically and gracefully recommend how to infuse the SEO strategy onto your website’s pages. From there, we’ll audit your site’s overall structure and functionality, making the site’s experience optimal for both Google and your end users. These days, user experience and SEO go hand in hand and it will improve your ability to rank.',
            iconClass: 'icon-on-site-optimization'
        },
        {
            title: 'LINK BUILDING',
            description: 'Our SEO team will gather thousands of different keywords and pull a number of metrics to determine a keyword’s potential value. These include search volume, our own proprietary competitive formula, and other different variables in order to determine how valuable these keywords are for different pages on your website.',
            iconClass: 'icon-link-building'
        },
        {
            title: 'CONTENT STRATEGY',
            description: 'Our SEO team will gather thousands of different keywords and pull a number of metrics to determine a keyword’s potential value. These include search volume, our own proprietary competitive formula, and other different variables in order to determine how valuable these keywords are for different pages on your website.',
            iconClass: 'icon-content-strategy'
        },
        {
            title: 'IN-DEPTH REPORTING',
            description: 'Our SEO team will gather thousands of different keywords and pull a number of metrics to determine a keyword’s potential value. These include search volume, our own proprietary competitive formula, and other different variables in order to determine how valuable these keywords are for different pages on your website.',
            iconClass: 'icon-in-depth-reporting'
        },
    ];

    return (
        <div className="seo-features">
            <h2 className="seo-features-title">Key <span>Features</span></h2>
            <div className="seo-features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="seo-feature-card">
                        <div className="seo-feature-icon-wrapper">
                            <div className={`seo-feature-icon ${feature.iconClass}`}></div>
                        </div>
                        <h3 className="seo-feature-title">{feature.title}</h3>
                        <p className="seo-feature-description">{feature.description}</p>
                        <button className="main-white-button">Contact Us</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SEO3;
