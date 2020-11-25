import React, { useState } from "react";

const AddMovieFormAlternative = (props) => {
  // Setting state with multiple useState
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [hasOscars, setHasOscars] = useState(false);
  const [IMDbRating, setIMDbRating] = useState("");

  // Individual change handlers for the input fields.
  // Why? Because we now have individual useState's and in order to monitor the inputs.
  const titleInputChangeHandler = (event) => setTitle(event.target.value);
  const directorInputChangeHandler = (event) => setDirector(event.target.value);
  const hasOscarsInputChangeHandler = (event) =>
    setHasOscars(event.target.checked);
  const IMDbRatingInputChangeHandler = (event) =>
    setIMDbRating(event.target.value);

  // Form submission
  const handleFormSubmit = (event) => {
    // Stops the default action of a form to refresh on submission
    event.preventDefault();

    // New object that combines all the newly added values in the state
    const newMovie = {
      title,
      director,
      hasOscars,
      IMDbRating,
    };

    // Add new movie to the DynamicList
    props.addMovie(newMovie);

    // Reset state
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

export default AddMovieFormAlternative;
