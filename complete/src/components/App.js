import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

/* import { listItems } from "./mapping-lists/ListDemo";
import MoviesList from "./mapping-lists/MoviesList";
import DynamicMovieList from "./conditional-rendering/DynamicMovieList";
import TextareaAndSelectTagDemo from "./forms/TextAreaAndSelectDemo";
import Counter from "./lifecycle-examples/Counter"; */

import Home from "./router/Home";
import About from "./router/About";
import Navbar from "./router/Navbar";
import { projects as Projects } from "./url-params/Projects";
import ProjectDetails from "./url-params/ProjectDetails";
import NotFoundPage from "./router/NotFoundPage";
class App extends Component {
  /*   constructor(props) {
    super(props);
    this.state = { isRunning: true };
    console.log("I am in the CONSTRUCTOR of the App.js.");
  } */

  /*   stopCounter = () => {
    this.setState({ ...this.state, isRunning: false });
  };
 */
  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
