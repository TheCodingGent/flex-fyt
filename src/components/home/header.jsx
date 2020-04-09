import React, { Component } from "react";
import styled from "styled-components";
import ExploreButton from "./exploreButton";

// Styles
const StyledHeader = styled.div`
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background: #343a40; // dark grey
`;

const Welcome = styled.h1`
  color: yellow;
  text-align: center;
  font-size: 45px;
  letter-spacing: 0.01em;
  margin: 0px;
`;

const Paragraph = styled.p`
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.01em;
  font-weight: 200;
`;

class Header extends Component {
  // Constants
  state = {
    name: "FlexFyt",
    imageUrl: "https://picsum.photos/200",
    clicked: false,
  };

  // constructor() {
  //   super();
  //   this.handleExplore = this.handleExplore.bind(this); // here we create an instance of the method where the input is always this.
  // }

  // Styles can be applied to the class or to JSX directly
  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  // Render JSX
  render() {
    return (
      <StyledHeader className="container-fluid">
        <Welcome>{this.formatGreeting()}</Welcome>
        <Paragraph>{this.getIntro()}</Paragraph>
        <ExploreButton />
      </StyledHeader>
    );
  }

  // classes should be exported to methods to keep the render function clean
  // getWelcomeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.name === "Yasser" ? "primary" : "warning";

  //   return classes;
  // }

  //  Helper Functions
  formatGreeting() {
    const { name } = this.state;
    return <h1>Welcome to {name}</h1>;
  }

  getIntro() {
    return (
      <p>
        A one-stop-shop for all your fitness needs, explore gyms near you and
        enjoy a gym membership taylored to your daily lifestyle test.
      </p>
    );
  }

  // Handlers

  handleExplore = () => {
    console.log("Explore has been cliked");
    if (!this.state.clicked) {
      this.setState({ name: "Bob", clicked: true }); // we need to tell react that the stat has changed.
    } else {
      this.setState({ name: "Yasser", clicked: false });
    }
  };
}

export default Header;
