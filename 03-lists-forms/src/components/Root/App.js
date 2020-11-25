import React from "react";
import "./App.css";
import MoviesList from "../Movies/MoviesList";
import DynamicMoviesList from "../Movies/DynamicMoviesList";

const App = () => {
  return (
    <section className="app">
      <h1>Working with Lists, Conditional Rendering & Forms</h1>
      <h2>Movie List </h2>
      <div className="container">
        <MoviesList />
      </div>

      <h2>Movie List With Conditional Rendering </h2>
      <DynamicMoviesList />
    </section>
  );
};

export default App;
