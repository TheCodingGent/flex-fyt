// Module Imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../../assets/css/default.min.css";

// Components
import Header from "../common/header.jsx";
import Home from "../home";
import Explore from "../explore";
import Contact from "../contact/contact.jsx";
import AboutUs from "../aboutus/about.jsx";

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
