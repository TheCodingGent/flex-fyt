import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledExploreButton = styled.button`
  position: relative;
  left: 50%;
`;

function ExploreButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/explore");
  }

  return (
    <StyledExploreButton
      type="button"
      onClick={handleClick}
      className="btn btn-primary btn-sm"
    >
      Explore
    </StyledExploreButton>
  );
}

export default ExploreButton;
