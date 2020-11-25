import React from "react";
import "./Movies.css";

import { movies } from "./data";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  return movies.map((movieItem, index) => (
    <MovieCard key={index} {...movieItem} />
  ));
};

export default MoviesList;
