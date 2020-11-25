import React, { useState } from "react";
import { dynamicMoviesList } from "./data";
import ImprovedMovieCard from "./ImprovedMovieCard";
import AddMovieForm from "./AddMovieForm";

const DynamicMovieList = () => {
  const [movies, setMovies] = useState(dynamicMoviesList);
  const [showOscarAwarded, setShowOscarAwarded] = useState(false);

  const deleteMovieHandler = (id) => {
    const moviesCopy = [...movies];
    const movieIndex = moviesCopy.findIndex((item) => item.id === id);
    moviesCopy.splice(movieIndex, 1);
    setMovies(moviesCopy);
  };

  const addMovieHandler = (newMovie) => {
    const moviesCopy = [...movies];
    moviesCopy.push(newMovie);
    setMovies(moviesCopy);
  };

  const toggleMovies = () => setShowOscarAwarded(!showOscarAwarded);

  const filteredMovies = movies.filter(
    (movieItem) => movieItem.hasOscars === showOscarAwarded
  );

  return (
    <div>
      <AddMovieForm addMovie={addMovieHandler} />

      {filteredMovies.map((item, index) => (
        <ImprovedMovieCard
          key={index}
          {...item}
          deleteOnClick={deleteMovieHandler}
        />
      ))}
      <button onClick={() => toggleMovies()}>
        {showOscarAwarded ? "Hide Oscar Awarded" : "Show Oscar Awarded"}
      </button>
    </div>
  );
};

export default DynamicMovieList;
