import React, { Component } from "react";
import axios from "axios";
import "./GifApp.css";

import SearchBar from "../Search/SearchBar";
import GifList from "../Gifs/GifList";
import SelectedGif from "../Gifs/SelectedGif";

class GifApp extends Component {
  state = {
    searchBarInput: "",
    gifListResults: [],
    selectedGif: {},
  };

  // Lifecycle method that executes when the application first renders.
  componentDidMount() {
    this.handleSearchForGif();
  }

  // Lifecycle method that executes when the application state is updated.
  componentDidUpdate(prevState) {
    if (this.state.searchBarInput !== prevState.searchBarInput) {
      this.handleSearchForGif();
    }
  }

  // Function handler that makes an api call to fetch gifs.
  // The gif results are the updated when the call is made.
  handleSearchForGif = () => {
    const API_KEY = "FN5bl5OrR6NlDWGWNhT1F60hblyHMCGt";
    const searchInput = this.state.searchBarInput
      ? this.state.searchBarInput
      : "kanye west";

    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_KEY}&limit=5`
      )
      .then((gifResults) => {
        this.setState({
          ...this.state,
          gifListResults: gifResults.data.data,
        });
      })
      .catch((error) => console.error(`Something went wrong: ${error}`));
  };

  // Function handler for updating the 'searchInput' state.
  // This function is passed down as a prop and used in the SearchBar component.
  handleAddSearchBarInputToAppState = (searchInput) => {
    this.setState({ ...this.state, searchBarInput: searchInput });
  };

  // Function handler for updating the 'selectedGif' state.
  // This function is passed down as a prop and used in the SearchBar component.
  handleSelectedGif = (chosenGif) =>
    this.setState({ ...this.state, selectedGif: chosenGif });

  // Function handler for updating the 'selectedGif' state
  // This function is passed down as a prop and used by the button that unmounts the SelectedGif
  handleToggleSelectedGif = () =>
    this.setState({ ...this.state, selectedGif: {} });

  render() {
    return (
      <section className="app">
        <h1>
          <span>Gif</span>-ted experience
        </h1>
        {/* SearchBar component */}
        <SearchBar addSearchInput={this.handleAddSearchBarInputToAppState} />

        {/* GifList Component */}
        <div className="content">
          {this.state.gifListResults.length ? (
            <GifList
              gifResults={this.state.gifListResults}
              selectGifClick={this.handleSelectedGif}
            />
          ) : (
            "Loading data from giphy..."
          )}

          <div className="selected-gif-result">
            {/* Selected Gif Component */}
            {this.state.selectedGif.images && (
              <SelectedGif selected={this.state.selectedGif.images} />
            )}

            {/* Button to toggle removing the selected gif */}
            {this.state.selectedGif.images && (
              <button onClick={() => this.handleToggleSelectedGif()}>
                Remove Selected Gif
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default GifApp;
