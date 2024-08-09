import React from 'react';
import '../../careers/second-section/Careers2.css';

const Careers3 = () => {
    return (
        <div className="careers2-container">
            <h2 className="careers2-heading">What <span className="careers2-highlight">We Offer</span></h2>
            <div className="careers2-values-grid">
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Competitive Salaries</h3>
                    <p className="careers2-value-text">
                        We offer competitive pay
                        packages that reflect
                        your skills and experience.
                    </p>
                </div>
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Comprehensive Benefits</h3>
                    <p className="careers2-value-text">
                        Enjoy health insurance,
                        retirement plans, paid
                        time off, and more.
                    </p>
                </div>
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Flexible Work Environment</h3>
                    <p className="careers2-value-text">
                        Options for remote work,
                        flexible hours, and a
                        supportive work-life balance.
                    </p>
                </div>
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Career Development</h3>
                    <p className="careers2-value-text">
                        Access to training programs,
                        certifications, and career
                        advancement opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Careers3;
