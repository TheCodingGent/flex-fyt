import React from "react";
import Intro from "./intro";

import "./home.scss";

function Home() {
  return (
    <div id="home">
      <Intro />
      <div className="backstretch">
        <img src="/images/cardio.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
