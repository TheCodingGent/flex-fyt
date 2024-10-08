import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./navbar.scss";

function Navbar() {
  const [navbarClass, setNavbarClass] = useState(
    "navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg"
  );

  function scrollToTop() {
    scroll.scrollToTop();
  }

  // remove blur when navigating away from home
  const handleHomeInactive = () => {
    setNavbarClass("navbar navbar-dark fixed-top navbar-expand-md");
  };

  // add blur on home
  const handleHomeActive = () => {
    setNavbarClass(
      "navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg"
    );
  };

  return (
    <nav className={navbarClass}>
      <div className="container">
        <div className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="logo"
            onClick={() => scrollToTop()}
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link scroll-link"
                onSetInactive={handleHomeInactive}
                onSetActive={handleHomeActive}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="explore"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link scroll-link"
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutus"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link scroll-link"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link scroll-link"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
