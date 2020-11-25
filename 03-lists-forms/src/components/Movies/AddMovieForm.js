import React, { useState } from "react";
import "./Movies.css";

const AddMovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [hasOscars, setHasOscars] = useState(false);
  const [IMDbRating, setIMDbRating] = useState("");

  const titleInputChangeHandler = (e) => setTitle(e.target.value);
  const directorInputChangeHandler = (e) => setDirector(e.target.value);
  const hasOscarsInputChangeHandler = (e) => setHasOscars(e.target.checked);
  const IMDbRatingInputChangeHandler = (e) => setIMDbRating(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      director,
      hasOscars,
      IMDbRating,
    };

    props.addMovie(newMovie);

    setTitle("");
    setDirector("");
    setHasOscars(false);
    setIMDbRating("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="movie-form-container">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={titleInputChangeHandler}
        />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={directorInputChangeHandler}
        />

        <label>Oscar Awarded:</label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
          onChange={hasOscarsInputChangeHandler}
        />

        <label>IMDb Rating:</label>
        <input
          type="text"
          name="IMDbRating"
          value={IMDbRating}
          onChange={IMDbRatingInputChangeHandler}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
