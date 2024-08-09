import React from 'react';
import './Careers4.css';
import careerImage1 from '../../../assets/images/careers-assets/1st image girl.png';
import careerImage2 from '../../../assets/images/careers-assets/2nd image girl.png';
import careerImage3 from '../../../assets/images/careers-assets/3rd girl.png';

const Careers4 = () => {
    return (
        <div className="careers4-container">
            <h1 className="careers4-heading">
                Open <span className="careers4-highlight">Positions</span>
            </h1>

            <div className="careers4-position reverse">
                <div className="careers4-image-container">
                    <img src={careerImage1} alt="IT Support Specialist" className="careers4-image"/>
                </div>
                <div className="careers4-position-text">
                    <h2>1. IT Support Specialist</h2>
                    <p><strong>Location:</strong> [Noida, WFO]</p>
                    <p><strong>Responsibilities:</strong> Provide technical support, troubleshoot issues, and manage IT
                        infrastructure.</p>
                    <p><strong>Qualifications:</strong> Experience in IT support, strong problem-solving skills, and
                        excellent communication.</p>
                    <button className="main-contact-button">Apply Now</button>
                </div>
            </div>

            <div className="careers4-position">
                <div className="careers4-image-container">
                    <img src={careerImage2} alt="Software Developer" className="careers4-image"/>
                </div>
                <div className="careers4-position-text">
                    <h2>2. Software Developer</h2>
                    <p><strong>Location:</strong> [Noida, WFO]</p>
                    <p><strong>Responsibilities:</strong> Develop and maintain software applications, collaborate with
                        cross-functional teams, and contribute to project planning.</p>
                    <p><strong>Qualifications:</strong> Proficiency in [Programming Languages], experience with software
                        development life cycle, and a passion for coding.</p>
                    <button className="main-contact-button">Apply Now</button>
                </div>
            </div>

            <div className="careers4-position reverse">
                <div className="careers4-image-container">
                    <img src={careerImage3} alt="Systems Analyst" className="careers4-image"/>
                </div>
                <div className="careers4-position-text">
                    <h2>3. Systems Analyst</h2>
                    <p><strong>Location:</strong> [Noida, WFO]</p>
                    <p><strong>Responsibilities:</strong> Analyze and optimize IT systems, gather and document
                        requirements, and liaise between stakeholders and development teams.</p>
                    <p><strong>Qualifications:</strong> Strong analytical skills, experience with system analysis and
                        design, and effective communication abilities.</p>
                    <button className="main-contact-button">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Careers4;