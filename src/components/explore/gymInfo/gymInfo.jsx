import React from "react";

import "./gymInfo.scss";

// Constants
const imageMappings = {
  Gym1: "swimming.jpg",
  Gym2: "yoga.jpg",
  Gym3: "cardio.jpg",
  Gym4: "kickboxing.jpg",
};

const locationBaseUrl = "https://www.google.com/maps/search/?api=1&query=";
const imageBaseUrl = "/images/";

// Helper Functions
function getLocationUrl(lat, lng) {
  return locationBaseUrl + lat + "," + lng;
}

function getImageurl(gymName) {
  return imageBaseUrl + imageMappings[gymName];
}

function formatServices(services) {
  var result = "";
  services.map((service) => (result += service + ", "));
  return result.substring(0, result.length - 2); // get rid of extra , and space
}

// Component
function GymInfo(props) {
  return (
    <div className="gym-card card">
      <img className="card-img-top" src={getImageurl(props.name)} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">Services: {formatServices(props.services)}</p>
        <p className="card-text">City: {props.city}</p>
        <p>
          Location:{" "}
          <a href={getLocationUrl(props.location[0], props.location[1])}>
            {props.address}
          </a>
        </p>
      </div>
    </div>
  );
}

export default GymInfo;
