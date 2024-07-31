import React from 'react';
import './Footer.css';
import phoneIcon from '../../../assets/images/home-assets/telephone_wight.png';
import mailIcon from '../../../assets/images/home-assets/email_wight.png';
import followIcon from '../../../assets/images/home-assets/share_wight.png';
import instagramIcon from '../../../assets/images/icons/instagram.png';
import linkedinIcon from '../../../assets/images/icons/linkedin.png';
import facebookIcon from '../../../assets/images/icons/facebook.png';
import pinterestIcon from '../../../assets/images/icons/pinterest.png';
import twitterIcon from '../../../assets/images/icons/twitter.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content-wrapper">
                <div className="footer-section-about">
                    <div className="footer-logo-wrapper">
                        <span className="footer-logo"></span>
                        <button className="footer-request-demo-button">Request a demo</button>
                    </div>
                    <h2>About Us</h2>
                    <p>
                        We focus on not just getting you website visitors, but also conversions. We focus on not just getting you website visitors, but also conversions.
                    </p>
                </div>
                <div className="footer-section-services">
                    <h2>Services</h2>
                    <ul>
                        <li>Web Development</li>
                        <li>Web Design</li>
                        <li>Digital Marketing</li>
                        <li>Mobile App Development</li>
                        <li>E-Commerce Development</li>
                    </ul>
                </div>
                <div className="footer-section-quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-section-contact">
                    <div className="footer-contact-item">
                        <div className="footer-icon">
                            <img src={phoneIcon} alt="Phone Icon" />
                        </div>
                        <div>
                            <h3>Call us</h3>
                            <p>+91-1234-123-123</p>
                            <p>+91-1234-123-123</p>
                        </div>
                    </div>
                    <div className="footer-contact-item">
                        <div className="footer-icon">
                            <img src={mailIcon} alt="Email Icon" />
                        </div>
                        <div>
                            <h3>Mail Us</h3>
                            <p>@infothecodeyogi.in</p>
                        </div>
                    </div>
                    <div className="footer-contact-item">
                        <div className="footer-icon">
                            <img src={followIcon} alt="Follow Icon" />
                        </div>
                        <div>
                            <h3>Follow Us</h3>
                            <div className="footer-social-icons">
                                <span className="footer-social-icon" style={{ backgroundImage: `url(${instagramIcon})` }}></span>
                                <span className="footer-social-icon" style={{ backgroundImage: `url(${linkedinIcon})` }}></span>
                                <span className="footer-social-icon" style={{ backgroundImage: `url(${facebookIcon})` }}></span>
                                <span className="footer-social-icon" style={{ backgroundImage: `url(${pinterestIcon})` }}></span>
                                <span className="footer-social-icon" style={{ backgroundImage: `url(${twitterIcon})` }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
