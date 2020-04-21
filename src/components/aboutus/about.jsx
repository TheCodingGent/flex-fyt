import React from "react";

import "./about.scss";

function AboutUs() {
  return (
    <div id="aboutus" className="aboutus-container d-flex flex-column">
      <div className="aboutus-header d-flex justify-content-center">
        <h1>About Us</h1>
      </div>
      <div className="d-flex flex-column">
        <p>123 Fake St.</p>
        <p>(123)456-7890</p>
        <p>example@email.com</p>
      </div>
    </div>
  );
}

export default AboutUs;
