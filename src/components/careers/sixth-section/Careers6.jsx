import React from 'react';
import Slider from 'react-slick';
import './Careers6.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import careerTestimonialImage1 from '../../../assets/images/careers-assets/careers_testimonials_image1.png';
import careerTestimonialImage2 from '../../../assets/images/careers-assets/careers_testimonials_image2.png';

const testimonials = [
    {
        name: "Amelia",
        role: "Graphic Designer",
        message: "Working at Thecodeyogi has been a game-changer for my career. The projects are challenging, and the team is incredibly supportive.",
        image: careerTestimonialImage1
    },
    {
        name: "Olivia",
        role: "Content Writer",
        message: "Working at Thecodeyogi has been a game-changer for my career. The projects are challenging, and the team is incredibly supportive.",
        image: careerTestimonialImage2
    },
    {
        name: "Amelia",
        role: "Graphic Designer",
        message: "Working at Thecodeyogi has been a game-changer for my career. The projects are challenging, and the team is incredibly supportive.",
        image: careerTestimonialImage1
    },
    {
        name: "Olivia",
        role: "Content Writer",
        message: "Working at Thecodeyogi has been a game-changer for my career. The projects are challenging, and the team is incredibly supportive.",
        image: careerTestimonialImage2
    },
];

const Careers6 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '200px',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '25px'
                }
            }
        ]
    };

    return (
        <div className="career-testimonials-section">
            <div className="career-testimonials-section-heading">
                <h2>Employee Testimonials</h2>
            </div>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="career-testimonial-card">
                        <div className="career-testimonial-content">
                            <img src={testimonial.image} alt={testimonial.name} className="career-client-image"/>
                            <div className="career-testimonial-text">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.message} – <span>{testimonial.name}, {testimonial.role}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Careers6;
