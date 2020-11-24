import React from "react";

import MovieCard from "./MovieCard";
import { movies } from "./data";

const MoviesList = () =>
  movies.map((item) => (
    <MovieCard key={item.id} title={item.title} director={item.director} />
  ));

export default MoviesList;
