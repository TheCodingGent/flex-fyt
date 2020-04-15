import React from "react";
import { useHistory } from "react-router-dom";

function ExploreButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/explore");
  }

  return (
    <button onClick={handleClick} className="btn btn-primary btn-sm">
      Explore
    </button>
  );
}

export default ExploreButton;
