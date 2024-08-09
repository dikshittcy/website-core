import React from 'react';
import './OurServices.css'
import DigitalMarketingImage from '../../../assets/images/home-assets/service-image-1.png';
import SEOImage from '../../../assets/images/home-assets/service-image-2.png';
import ContentMarketingImage from '../../../assets/images/home-assets/service-image-3.png';
import UIUXImage from '../../../assets/images/home-assets/service-image-4.png';
import AppDevelopmentImage from '../../../assets/images/home-assets/service-image-5.png';
import WebDevelopmentImage from '../../../assets/images/home-assets/service-image-6.png';

const services = [
    {
        image: DigitalMarketingImage,
        title: 'Digital Marketing',
        alt: 'Digital Marketing'
    },
    {
        image: SEOImage,
        title: 'Search Engine Optimization',
        alt: 'Search Engine Optimization'
    },
    {
        image: ContentMarketingImage,
        title: 'Content Marketing',
        alt: 'Content Marketing'
    },
    {
        image: UIUXImage,
        title: 'UIUX',
        alt: 'UIUX'
    },
    {
        image: AppDevelopmentImage,
        title: 'App Development',
        alt: 'App Development'
    },
    {
        image: WebDevelopmentImage,
        title: 'Web Development',
        alt: 'Web Development'
    }
];

const OurServices = () => {
    return (
        <section className="services-section">
            <h2>Our <span>Services</span></h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.image} alt={service.alt} />
                        <h3>{service.title}</h3>
                        <button className="service-button">View More</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
