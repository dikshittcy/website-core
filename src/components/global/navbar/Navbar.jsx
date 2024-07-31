import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../../../assets/images/logos/navbar_logo.png';

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
        setIsCompanyOpen(false);
    };

    const toggleCompanyMenu = () => {
        setIsCompanyOpen(!isCompanyOpen);
        setIsServicesOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="nav-logo">
                    <img src={logoImage} alt="Logo" />
                </div>
                <ul className="nav-links">
                    <li className="nav-item">
                        <span onClick={toggleServicesMenu}>Services <span className="dropdown-arrow">▾</span></span>
                        {isServicesOpen && (
                            <div className="dropdown-menu">
                                <a href="/digital-marketing">Digital Marketing</a>
                                <a href="/seo">Search Engine Optimization</a>
                                <a href="/ai-products">Generative AI Products</a>
                                <a href="/uiux">UI/UX</a>
                                <a href="/app-dev">App Development</a>
                                <a href="/web-dev">Web Development</a>
                            </div>
                        )}
                    </li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="nav-right">
                <ul className="nav-links">
                    <li className="nav-item">
                        <span onClick={toggleCompanyMenu}>Company <span className="dropdown-arrow">▾</span></span>
                        {isCompanyOpen && (
                            <div className="dropdown-menu">
                                <a href="/about-us">About Us</a>
                                <a href="/careers">Careers</a>
                                <a href="/why-us">Why TheCodeYogi?</a>
                            </div>
                        )}
                    </li>
                    <li><a href="/portfolio">Our Portfolio</a></li>
                    <li><a href="/contact-us">Contact us</a></li>
                </ul>
                <button className="nav-contact-button">Request a demo</button>
            </div>
        </nav>
    );
};

export default Navbar;
