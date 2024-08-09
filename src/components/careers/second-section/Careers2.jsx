import React from 'react';
import './Careers2.css';

const Careers2 = () => {
    return (
        <div className="careers2-container">
            <h2 className="careers2-heading">Our <span className="careers2-highlight">Values</span></h2>
            <div className="careers2-values-grid">
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Innovation</h3>
                    <p className="careers2-value-text">
                        We embrace new technologies and ideas to stay ahead in the ever-evolving tech landscape.
                    </p>
                </div>
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Integrity</h3>
                    <p className="careers2-value-text">
                        We uphold the highest standards of professionalism and transparency in everything we do.
                    </p>
                </div>
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Collaboration</h3>
                    <p className="careers2-value-text">
                        We believe in the power of teamwork to achieve remarkable results.
                    </p>
                </div>
                <div className="careers2-value-card">
                    <h3 className="careers2-value-title">Growth</h3>
                    <p className="careers2-value-text">
                        We support and encourage professional development and personal growth.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Careers2;
