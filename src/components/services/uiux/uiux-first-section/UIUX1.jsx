import React from 'react';
import './UIUX1.css';
import StrategyImage from '../../../../assets/images/uiux-assets/our_strategy_image.jpg';

const UIUX1 = () => {
    return (
        <div className="uiux1-container">
            <h2 className="uiux1-heading">Our <span className="uiux1-highlight">Strategy</span></h2>
            <div className="uiux1-content">
                <div className="uiux1-text">
                    <div className="uiux1-section">
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
                    <div className="uiux1-section">
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
                    <div className="uiux1-section">
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
                <div className="uiux1-image-card">
                </div>
                <div className="uiux1-card">
                    <img className="uiux1-strategy-image" src={StrategyImage} alt="Strategy Illustration"/>
                </div>
            </div>
        </div>
    );
};

export default UIUX1;
