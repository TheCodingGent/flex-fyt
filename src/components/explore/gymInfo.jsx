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

class GymInfo extends React.Component {
  // Constants
  state = {
    imageUrl: "https://picsum.photos/200",
  };

  render() {
    return (
      <StyledGymInfo className="card">
        <Image className="card-img-top" src={this.state.imageUrl} alt="#" />
        <div className="card-body">
          <GymName className="card-title">{this.props.name}</GymName>
          <p className="card-text">Services: {this.props.services}</p>
          <p className="card-text">City: {this.props.city}</p>
          <p>
            Location: <a href="http://www.google.com">{this.props.location}</a>
          </p>
        </div>
      </StyledGymInfo>
    );
  }
}

export default GymInfo;
