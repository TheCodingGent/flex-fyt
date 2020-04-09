import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";

// Styles

const StyledHome = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
`;

class Home extends Component {
  state = {};

  // Render JSX
  render() {
    return (
      <StyledHome className="container-fluid">
        <Header></Header>
      </StyledHome>
    );
  }
}

export default Home;
