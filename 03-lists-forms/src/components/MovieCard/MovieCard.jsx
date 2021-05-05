import React from "react";

const MovieCard = ({ title, director }) => {
  return (
    <div className="movies-card-regular">
      <h3>{title}</h3>
      <p>Director: {director}</p>
    </div>
  );
};

export default MovieCard;
