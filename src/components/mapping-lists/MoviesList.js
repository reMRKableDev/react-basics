import React from "react";

import Card from "./Card";
import { movies } from "./ListDemo";

const MoviesList = () => {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <Card title={item.title} director={item.director} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
