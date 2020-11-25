import React, { useState } from "react";
import "./Movies.css";

const initialState = {
  title: "",
  director: "",
  hasOscars: false,
  IMDbRating: "",
};

const AddMovieForm = (props) => {
  /* const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [hasOscars, setHasOscars] = useState(false);
  const [IMDbRating, setIMDbRating] = useState(""); */

  const [allValues, setAllValues] = useState(initialState);

  const inputChangeHandler = (event) => {
    let { name, value, type, checked } = event.target;

    // special case for checkboxes (where boolean value is hold in .checked property)
    if (type === "checkbox") {
      value = checked;
    }

    setAllValues({ ...allValues, [name]: value });
  };

  /*   const titleInputChangeHandler = (event) => setTitle(event.target.value);
  const directorInputChangeHandler = (event) => setDirector(event.target.value);
  const hasOscarsInputChangeHandler = (event) => setHasOscars(event.target.checked);
  const IMDbRatingInputChangeHandler = (event) => setIMDbRating(event.target.value); */

  const handleFormSubmit = (event) => {
    event.preventDefault();

    /* const newMovie = {
      title,
      director,
      hasOscars,
      IMDbRating,
    };

    props.addMovie(newMovie);

    setTitle("");
    setDirector("");
    setHasOscars(false);
    setIMDbRating(""); */

    props.addMovie(allValues);
    setAllValues(initialState);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="movie-form-container">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={allValues.title}
          onChange={inputChangeHandler}
        />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={allValues.director}
          onChange={inputChangeHandler}
        />

        <label>Oscar Awarded:</label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={allValues.hasOscars}
          onChange={inputChangeHandler}
        />

        <label>IMDb Rating:</label>
        <input
          type="text"
          name="IMDbRating"
          value={allValues.IMDbRating}
          onChange={inputChangeHandler}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
