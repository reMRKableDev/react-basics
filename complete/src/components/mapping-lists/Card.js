import React from "react";

const Card = ({ title, director }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Director: {director}</p>
    </div>
  );
};

export default Card;
