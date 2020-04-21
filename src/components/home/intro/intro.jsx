import React from "react";
import { Link } from "react-scroll";

import "./intro.scss";

function Intro() {
  return (
    <div className="home-intro container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text">
          <h1>Welcome to FlexFyt</h1>
          <div className="description">
            <p>
              A one-stop-shop for all your fitness needs, explore gyms near you
              and enjoy a gym membership taylored to your daily lifestyle test.
            </p>
          </div>
          <div className="top-big-link">
            <Link
              activeClass="active"
              to="explore"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="btn btn-primary btn-sm">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
