import React, { Component } from "react";
import "./App.css";

import { listItems } from "./mapping-lists/ListDemo";
import MoviesList from "./mapping-lists/MoviesList";
import DynamicMovieList from "./conditional-rendering/DynamicMovieList";
import TextareaAndSelectTagDemo from "./forms/TextAreaAndSelectDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>{listItems}</ul>
        <h1>Regular Movie List</h1>
        <MoviesList />
        <h1>Dynamic Movie List</h1>
        <DynamicMovieList />
        <TextareaAndSelectTagDemo />
      </div>
    );
  }
}

export default App;
