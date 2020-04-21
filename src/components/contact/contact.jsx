import React from "react";

import "./contact.scss";

function Contact() {
  return (
    <div id="contact" className="contact-container d-flex flex-column">
      <div className="contact-header d-flex justify-content-center">
        <h1>Contact Us</h1>
      </div>
      <div className="d-flex flex-column">
        <p>123 Fake St.</p>
        <p>(123)456-7890</p>
        <p>example@email.com</p>
      </div>
    </div>
  );
}

export default Contact;
