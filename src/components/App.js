import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

/* import { listItems } from "./mapping-lists/ListDemo";
import MoviesList from "./mapping-lists/MoviesList";
import DynamicMovieList from "./conditional-rendering/DynamicMovieList";
import TextareaAndSelectTagDemo from "./forms/TextAreaAndSelectDemo";
import Counter from "./lifecycle-examples/Counter"; */

import Home from "./router/Home";
import About from "./router/About";
import Navbar from "./router/Navbar";
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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
