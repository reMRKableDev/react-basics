import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import { Projects } from "../Projects/Projects";
import ProjectDetails from "../Projects/ProjectDetails";
import NotFound from "../NotFound/NotFound";

const App = () => {
  return (
    <section className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default App;
