// Module Imports
import React from "react";

import "./app.scss";

// Components
import Navbar from "../common/navbar";
import Home from "../home";
import Explore from "../explore";
import Contact from "../contact/contact.jsx";
import AboutUs from "../aboutus";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home title="home" />
      <Explore title="explore" />
      <AboutUs title="about" />
      <Contact title="contact" />
    </div>
  );
}

export default App;
