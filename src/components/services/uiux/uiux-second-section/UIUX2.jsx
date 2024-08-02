import React from 'react';
import './UIUX2.css';
import AnalysisImage from '../../../../assets/images/uiux-assets/uiux 3r section image.jpg';

const UIUX2 = () => {
    return (
        <div className="uiux2-container">
            <div className="uiux2-content">
                <div className="uiux2-image-card">
                <div className="uiux2-card">
                    <img className="uiux2-analysis-image" src={AnalysisImage} alt="Strategy Illustration"/>
                </div>
                </div>
                <div className="uiux2-text">
                    <div className="uiux2-section">
                        <h3>1. Define Your Value Proposition</h3>
                        <ul>
                            <li>
                                <strong>Unique Selling Points:</strong> Clearly articulate what makes your UI/UX
                                services stand out. Focus on expertise, innovative solutions, successful case studies,
                                or specific methodologies.
                            </li>
                            <li>
                                <strong>Service Benefits:</strong> Highlight the benefits clients will gain, such as
                                improved user engagement, higher conversion rates, or a more intuitive user experience.
                            </li>
                        </ul>
                    </div>
                    <div className="uiux2-section">
                        <h3>2. Target Audience Analysis</h3>
                        <ul>
                            <li>
                                <strong>Identify Clients:</strong> Understand who your ideal clients are—startups,
                                established companies, e-commerce platforms, etc.
                            </li>
                            <li>
                                <strong>Pain Points:</strong> Recognize common challenges they face related to UI/UX
                                design and tailor your messaging to address these issues.
                            </li>
                        </ul>
                    </div>
                    <div className="uiux2-section">
                        <h3>3. Service Offerings and Structure</h3>
                        <ul>
                            <li>
                                <strong>Service Categories:</strong> Break down your offerings into clear categories
                                such as User Research, Wireframing, Prototyping, UI Design, UX Strategy, Usability
                                Testing, etc.
                            </li>
                            <li>
                                <strong>Process Overview:</strong> Describe your design process in a simple,
                                easy-to-understand format. Use visuals like infographics or flowcharts to illustrate
                                steps from initial consultation to final delivery.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UIUX2;
