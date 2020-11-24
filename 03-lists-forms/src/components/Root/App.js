import React, { Component } from "react";
import "./App.css";
import MoviesList from "../Movies/MoviesList";

class App extends Component {
  render() {
    return (
      <section className="app">
        <MoviesList />
      </section>
    );
  }
}

export default App;
