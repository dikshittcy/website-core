import React from 'react';
import './Customers.css';

import burgerKingLogo from '../../../assets/images/home-assets/client_section_burger_king.png';
import googleLogo from '../../../assets/images/home-assets/client_section_google.png';
import appleLogo from '../../../assets/images/home-assets/client_section_apple.png';
import mcdonaldsLogo from '../../../assets/images/home-assets/client_section_mcdonalds.png';
import tkiLogo from '../../../assets/images/home-assets/client_section_travel_king.png';

const Customers = () => {
    return (
        <div className="customers-section">
            <h2>100+ Satisfied <span>Customers</span></h2>
            <div className="customers-logos">
                <img className="logo-burger-king" src={burgerKingLogo} alt="Burger King"/>
                <img className="logo-google" src={googleLogo} alt="Google"/>
                <img className="logo-apple" src={appleLogo} alt="Apple"/>
                <img className="logo-mcdonalds" src={mcdonaldsLogo} alt="McDonald's"/>
                <img className="logo-tki" src={tkiLogo} alt="Travel King India"/>
            </div>
        </div>
    );
};

export default Customers;
