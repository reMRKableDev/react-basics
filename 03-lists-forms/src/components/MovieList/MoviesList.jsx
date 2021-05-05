import React from "react";

import { movies } from "../../data";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  return movies.map((movieItem, index) => (
    <MovieCard key={index} {...movieItem} />
  ));
};

export default MoviesList;
