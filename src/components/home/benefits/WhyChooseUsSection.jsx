import React from 'react';
import './WhyChooseUsSection.css';
import focusIcon from '../../../assets/images/home-assets/focus.png';
import seoIcon from '../../../assets/images/home-assets/seo.png';
import freeIcon from '../../../assets/images/home-assets/free.png';

const WhyChooseUsSection = () => {
    return (
        <section className="why-choose-us-section">
            <div className="content-container">
                <div className="small-circle">
                    <h2>Why Choose Us?</h2>
                </div>
                <div className="large-circle">
                    <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula eget dolor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula eget dolor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="circle-top">
                    <img src={focusIcon} alt="Focus" className="icon"/>
                    <div className="detail-top">
                        <p>we <span className="highlight">Focus</span> on not just getting you websites visitors,
                            but also conversions.</p>
                    </div>
                </div>
                <div className="circle-middle">
                    <img src={seoIcon} alt="SEO" className="icon"/>
                    <div className="detail-middle">
                        <p>we take care of your <span className="highlight">SEO</span> and google accounts setup.
                        </p>
                    </div>
                </div>
                <div className="circle-bottom">
                    <img src={freeIcon} alt="Free" className="icon"/>
                    <div className="detail-bottom">
                        <p><span className="highlight">2 Month free</span> maintenance & support.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsSection;
