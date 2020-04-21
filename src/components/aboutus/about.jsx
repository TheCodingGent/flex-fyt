import React from "react";

import "./about.scss";

function AboutUs() {
  return (
    <div
      id="aboutus"
      className="aboutus-container container d-flex flex-column"
    >
      <div className="aboutus-header d-flex justify-content-center">
        <h1>About Us</h1>
      </div>
      <div className="aboutus-content d-flex">
        <div className="aboutus-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            porta porttitor hendrerit. Nam dui eros, euismod imperdiet eleifend
            pharetra, semper sed ipsum. Pellentesque condimentum congue lorem,
            nec porttitor ex fringilla tempor. Praesent non dolor mi. Duis porta
            gravida massa vel efficitur. Duis tincidunt tellus in elementum
            vehicula. In gravida imperdiet sem, sed cursus velit aliquet eget.
            Praesent ac ultricies nunc. Aenean at turpis nec nibh condimentum
            eleifend nec non ligula. Ut maximus varius magna, eget sagittis elit
            commodo et. Pellentesque a posuere dui, ac scelerisque augue. Nunc
            sed lacus vel tellus vulputate luctus. In erat velit, posuere non
            rutrum pulvinar, faucibus quis velit. Pellentesque non tristique
            tellus. Phasellus sit amet ante elit. Nulla augue justo, vulputate
            in velit sit amet, varius laoreet lectus. Cras finibus molestie
            purus quis pharetra. Aliquam eget scelerisque sem. Ut pretium risus
            mattis porta aliquet. Etiam eu arcu eget magna congue vestibulum.
            Etiam vel massa vitae velit elementum mollis vitae sed tortor.
            Maecenas a libero ac tellus rhoncus maximus in sed lectus. Nulla
            quis massa ac urna euismod luctus. Maecenas ut semper magna.
            Curabitur a pharetra quam. Duis rutrum mi at viverra consequat.
            Vivamus ut justo aliquam, lacinia ipsum placerat, eleifend nibh. In
            non malesuada massa, quis feugiat sem. Duis id pulvinar turpis, sit
            amet auctor eros. Mauris venenatis efficitur elit ut tincidunt.
            Vestibulum sagittis enim in metus accumsan tincidunt. Mauris tempor
            semper mi id rhoncus. In hac habitasse platea dictumst. Etiam ac
            lectus ut mi dignissim semper. Nam maximus mi ac tristique bibendum.
            Aenean sed vulputate ipsum. Ut interdum ut risus ut convallis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
            justo turpis.
          </p>
        </div>
        <div className="aboutus-img align-content-center">
          <img src="/images/cardio.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
