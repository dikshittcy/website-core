import React from 'react';
import { Link } from 'react-router-dom';
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
                        <li><Link to="/uiux">UI/UX</Link></li>
                        <li><Link to="/web-dev">Web Development</Link></li>
                        <li><Link to="/app-dev">App Development</Link></li>
                        <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                        <li><Link to="/ai-products">Generative Ai Products</Link></li>
                        <li><Link to="/seo">Search Engine Optimization</Link></li>
                    </ul>
                </div>
                <div className="footer-section-quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
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
                            <p>info@thecodeyogi.in</p>
                        </div>
                    </div>
                    <div className="footer-contact-item">
                        <div className="footer-icon">
                            <img src={followIcon} alt="Follow Icon" />
                        </div>
                        <div>
                            <h3>Follow Us</h3>
                            <div className="footer-social-icons">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" style={{ backgroundImage: `url(${instagramIcon})` }}></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" style={{ backgroundImage: `url(${linkedinIcon})` }}></a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" style={{ backgroundImage: `url(${facebookIcon})` }}></a>
                                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" style={{ backgroundImage: `url(${pinterestIcon})` }}></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" style={{ backgroundImage: `url(${twitterIcon})` }}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
