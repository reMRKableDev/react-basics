import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];

export const movies = [
  { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
  { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
  { id: "z2uykusRE", title: "Titanic", director: "James Cameron" },
];

// array of list item HTML elements that needs to be displayed
export const listItems = numbers.map((value) => <li key={value}>{value}</li>);
