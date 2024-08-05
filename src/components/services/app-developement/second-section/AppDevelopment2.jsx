import React from 'react';
import './AppDevelopment2.css';
import AppDevelopmentQuestionImage from '../../../../assets/images/app-development-assets/app_developmentwhy_choose_us_image.png';

const AppDevelopment2 = () => {
    return (
        <div className="app-development2-container">
            <div className="app-development2-content">
                <h2 className="app-development2-title">Why <span className="highlight">Choose Us?</span></h2>
                <ul className="app-development2-list">
                    <li><strong>Tailored Solutions:</strong> We design and develop apps that reflect your brand and meet your unique requirements.</li>
                    <li><strong>User-Centric Approach:</strong> Our designs prioritize user experience, making your app intuitive and engaging.</li>
                    <li><strong>Innovative Technology:</strong> We leverage the latest technologies and industry best practices to deliver high-quality apps.</li>
                    <li><strong>Transparent Communication:</strong> We keep you informed throughout the development process, ensuring your vision is realized.</li>
                </ul>
            </div>
            <div className="app-development2-image-container">
                <img src={AppDevelopmentQuestionImage} alt="Why Choose Us?" className="app-development2-image" />
            </div>
        </div>
    );
};

export default AppDevelopment2;
