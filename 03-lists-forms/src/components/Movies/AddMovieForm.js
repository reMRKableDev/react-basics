import React, { useState } from "react";
import "./Movies.css";

const initialState = {
  title: "",
  director: "",
  hasOscars: false,
  IMDbRating: "",
};

const AddMovieForm = (props) => {
  const [allValues, setAllValues] = useState(initialState);

  // change handler - it monitors the values of input and allow us to save those values to our state
  const inputChangeHandler = (event) => {
    // Get the input's name, type, value or check status from the event.target
    // event - the user action on the frontend, ie: typing, clicking etc
    // event.target - where the data that results from a user doing an action resides.
    let { name, value, type, checked } = event.target;

    // To check for a checkbox, and set the value of that input to either true or false
    if (type === "checkbox") {
      value = checked;
    }

    // Set the new values coming in from the input fields
    // ...allValues - using a spread operator, we take into account any previous data that existed in the state
    // [name]: value - sets the new values from the form the the state.
    setAllValues({ ...allValues, [name]: value });
  };

  // Form submission -
  const handleFormSubmission = (event) => {
    // Stops the default action of a form to refresh on submission
    event.preventDefault();

    // Add new movie to the DynamicList
    props.addMovie(allValues);

    // Reset state
    setAllValues(initialState);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission} className="movie-form-container">
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
