// Module Imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/default.min.css";

// Components
import Header from "./components/common/header.jsx";
import Home from "./components/home/home.jsx";
import Explore from "./components/explore/explore.jsx";
import Contact from "./components/contact/contact.jsx";
import AboutUs from "./components/aboutus/about.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
