import React, { useEffect } from 'react';

const TestimonialSection = () => {
    const testimonials = [
        {
            image: '/assets/img/testimonial-1.jpg',
            name: 'Client Name 1',
            profession: 'Profession 1',
            text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
            image: '/assets/img/testimonial-2.jpg',
            name: 'Client Name 2',
            profession: 'Profession 2',
            text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
            image: '/assets/img/testimonial-3.jpg',
            name: 'Client Name 3',
            profession: 'Profession 3',
            text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
            image: '/assets/img/testimonial-4.jpg',
            name: 'Client Name 4',
            profession: 'Profession 4',
            text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
    ];

    useEffect(() => {
        // Initialize the Owl Carousel
        const $ = window.$; 
        $(".testimonial-carousel").owlCarousel({
            // autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav : false,
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });

        // Cleanup function 
        return () => {
            $('.owl-carousel').trigger('destroy.owl.carousel');
        };
    }, []);

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Students Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item text-center">
                            <img
                                className="border rounded-circle p-2 mx-auto mb-3"
                                src={testimonial.image}
                                alt={testimonial.name}
                                style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="mb-0">{testimonial.name}</h5>
                            <p>{testimonial.profession}</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
