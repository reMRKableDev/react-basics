import React from "react";
import "./App.css";

import MoviesList from "./components/MovieList/MoviesList";
import DynamicMoviesList from "./components/DynamicMovieList/DynamicMoviesList";

const App = () => {
  return (
    <section className="app">
      <h1>Working with Lists, Conditional Rendering & Forms</h1>
      <h2>Regular Movie List (Props)</h2>
      <div className="container">
        <MoviesList />
      </div>

      <h2>Dynamic Movie List (State)</h2>
      <DynamicMoviesList />
    </section>
  );
};

export default App;
