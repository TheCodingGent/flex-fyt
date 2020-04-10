import React from "react";
import styled from "styled-components";

const StyledGymInfo = styled.div`
  margin: 12px;
  width: 400px;
`;
const GymName = styled.h4`
  color: red;
`;

const Image = styled.img`
  width: 100%;
`;

const imageMappings = {
  Gym1: "swimming.jpg",
  Gym2: "yoga.jpg",
  Gym3: "cardio.jpg",
  Gym4: "kickboxing.jpg",
};

class GymInfo extends React.Component {
  // Constants

  state = {
    //imageUrl: "https://picsum.photos/200",
    locationBaseUrl: "https://www.google.com/maps/search/?api=1&query=",
    imageBaseUrl: "/images/",
  };

  getLocationUrl() {
    return (
      this.state.locationBaseUrl +
      this.props.location[0] +
      "," +
      this.props.location[1]
    );
  }

  getImageurl() {
    return this.state.imageBaseUrl + imageMappings[this.props.name];
  }

  formatServices() {
    var result = "";
    this.props.services.map((service) => (result += service + ", "));
    return result.substring(0, result.length - 2); // get rid of extra , and space
  }

  render() {
    return (
      <StyledGymInfo className="card">
        <Image
          className="card-img-top"
          src={this.getImageurl()}
          alt="no-image"
        />
        <div className="card-body">
          <GymName className="card-title">{this.props.name}</GymName>
          <p className="card-text">Services: {this.formatServices()}</p>
          <p className="card-text">City: {this.props.city}</p>
          <p>
            Location: <a href={this.getLocationUrl()}>{this.props.address}</a>
          </p>
        </div>
      </StyledGymInfo>
    );
  }
}

export default GymInfo;
