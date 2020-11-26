import React, { Component } from "react";
import "./SearchBar.css";

const initialState = { userInput: "" };

class SearchBar extends Component {
  state = initialState;

  handleInputChange = (event) =>
    this.setState({ ...this.state, userInput: event.target.value });

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
