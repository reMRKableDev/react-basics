import React, { Component } from "react";
import "./SearchBar.css";

const initialState = { userInput: "" };

/* SearchBar Component */
class SearchBar extends Component {
  state = initialState;

  // Function handler that checks for the changes in the input fields
  handleInputChange = (event) =>
    this.setState({ ...this.state, userInput: event.target.value });

  // Function handler that handles submitting the form
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addSearchInput(this.state.userInput);
    this.setState(initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search for gif here..."
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <button type="submit">Find GIF</button>
      </form>
    );
  }
}

export default SearchBar;
