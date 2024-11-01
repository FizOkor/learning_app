import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CoursesSection from '../components/CoursesSection'
import TestimonialSection from '../components/TestimonialSection'
import Instructors from '../components/Instructors'

function Home() {
  useEffect(() => {
    // Initialize Owl Carousel
    const $ = window.$; // Assuming jQuery is globally available
    // Header carousel
    $(".header-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
      ],
      responsive: {
        0: {
          nav: false // Disable navigation arrows on smaller screens
        },
        768: {
          nav: true // Enable navigation arrows on larger screens
        }
      }
    });
  }, []);

  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="/assets/img/carousel-1.jpg" alt="" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                    <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                    <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                    <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="/assets/img/carousel-2.jpg" alt="" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                    <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                    <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                    <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                  <h5 className="mb-3">Skilled Instructors</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                  <h5 className="mb-3">Online Classes</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-home text-primary mb-4"></i>
                  <h5 className="mb-3">Home Projects</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                  <h5 className="mb-3">Book Library</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about.jpg"
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
              <h1 className="mb-4">Welcome to Fiz-Learning</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/*  Categories Start */}
      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
            <h1 className="mb-5">Courses Categories</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                  <a className="position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid" src="assets/img/cat-1.jpg" alt="" />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                      <h5 className="m-0">Web Design</h5>
                      <small className="text-primary">49 Courses</small>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                  <a className="position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid" src="assets/img/cat-2.jpg" alt="" />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                      <h5 className="m-0">Graphic Design</h5>
                      <small className="text-primary">49 Courses</small>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                  <a className="position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid" src="assets/img/cat-3.jpg" alt="" />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                      <h5 className="m-0">Video Editing</h5>
                      <small className="text-primary">49 Courses</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: '350px' }}>
              <a className="position-relative d-block h-100 overflow-hidden" href="">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/cat-4.jpg"
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                  <h5 className="m-0">Online Marketing</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  Categories End */}

      {/* Courses Start */}
      <CoursesSection/>
      {/* Courses End */}

      {/* Team Start */}
      <Instructors /> 
      {/* Team End */} 

      {/* Testimonial Start */}
      <TestimonialSection /> 
      {/* Testimonial End */}     
                  
    </>
  )
}

export default Home