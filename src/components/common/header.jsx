import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="first">
            <Link to="https://facebook.com"></Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="last">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  /*return (
    <header>
      <div className="logo">FLEXFYT</div>
      <nav>
        <ul>
          <li className="first">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="last">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );*/
}

export default Header;
