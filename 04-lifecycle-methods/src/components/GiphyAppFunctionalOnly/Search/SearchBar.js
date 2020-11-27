import React, { useState } from "react";
import "./SearchBar.css";

const initialState = "";

/* Functional Component */
const SearchBar = ({ addSearchInput }) => {
  const [searchState, setSearchState] = useState(initialState);

  // Function handler that checks for the changes in the input fields
  const handleInputChange = (event) => {
    setSearchState(event.target.value);
  };

  // Function handler that handles submitting the form
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Call a function that will allow for the form to lift it's state to the main application.
    addSearchInput(searchState);

    // reset the state of the form
    setSearchState(initialState);
  };
  return (
    <form onSubmit={handleFormSubmit} className="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search for gif here..."
        value={searchState}
        onChange={handleInputChange}
      />
      <button type="submit">Find GIF</button>
    </form>
  );
};

export default SearchBar;
