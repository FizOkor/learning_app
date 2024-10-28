import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Get current location

  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>Fiz-Learning</h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/courses" className={`nav-item nav-link ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Link>

            
            <div className="nav-item dropdown">
              <Link
                to="#"
                className={`nav-link dropdown-toggle ${location.pathname.startsWith('/team') ||
                  location.pathname.startsWith('/testimonial') ||
                  location.pathname.startsWith('/error') ? 'active' : ''}`}
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/team" className={`dropdown-item ${location.pathname === '/team' ? 'active' : ''}`}>
                  Our Team
                </Link>
                <Link to="/testimonial" className={`dropdown-item ${location.pathname === '/testimonial' ? 'active' : ''}`}>
                  Testimonial
                </Link>
                <Link to="/error" className={`dropdown-item ${location.pathname === '/error' ? 'active' : ''}`}>
                  404 Page
                </Link>
              </div>
            </div>

            <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </div>
          <Link to="/contact" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Header;
