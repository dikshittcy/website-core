import React from 'react';
import '../../app-developement/third-section/AppDevelopment3.css';
import expertiseImage from '../../../../assets/images/app-development-assets/our_expertise image.png';

const WebDevelopment3 = () => {
    return (
        <div className="expertise-container">
            <div className="expertise-image">
                <img src={expertiseImage} alt="Our Expertise"/>
            </div>
            <div className="expertise-content">
                <h2>Our Expertise <span>Includes</span></h2>
                <ul>
                    <li><span>Mobile Apps:</span> iOS, Android, and cross-platform development.</li>
                    <li><span>Web Apps:</span> Responsive and interactive web applications for all devices.</li>
                    <li><span>Enterprise Solutions:</span> Custom apps designed to enhance operational efficiency and
                        integrate seamlessly with your existing systems.
                    </li> <li><span>Mobile Apps:</span> iOS, Android, and cross-platform development.</li>
                    <li><span>Web Apps:</span> Responsive and interactive web applications for all devices.</li>
                    <li><span>Enterprise Solutions:</span> Custom apps designed to enhance operational efficiency and
                        integrate seamlessly with your existing systems.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default WebDevelopment3;
