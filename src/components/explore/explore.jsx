import React from "react";
import Search from "./search";

import "./explore.scss";

function Explore() {
  return (
    <div
      id="explore"
      className="explore-container container d-flex flex-column"
    >
      <div className="explore-header d-flex justify-content-center">
        <h1>Explore</h1>
      </div>
      <Search />
    </div>
  );
}

export default Explore;
