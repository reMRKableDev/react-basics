import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import GifList from "../Gifs/GifList";
import SelectedGif from "../Gifs/SelectedGif";
import SearchBar from "../Search/SearchBar";

class App extends Component {
  state = {
    searchBarInput: "",
    gifListResults: [],
    selectedGif: {},
  };

  // Run a default search when the application first mounts
  componentDidMount() {
    this.handleSearchForGif();
  }

  // Run a search when the state value from search is
  componentDidUpdate(prevState) {
    if (this.state.searchBarInput !== prevState.searchBarInput) {
      this.handleSearchForGif();
    }
  }

  handleAddSearchBarInputToAppState = (searchInput) => {
    this.setState({ ...this.state, searchBarInput: searchInput });
  };

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

  handleSelectedGif = (chosenGif) =>
    this.setState({ ...this.state, selectedGif: chosenGif });

  handleToggleSelectedGif = () =>
    this.setState({ ...this.state, selectedGif: {} });

  render() {
    return (
      <section className="app">
        <h1>
          <span>Gif</span>-ted experience
        </h1>
        <SearchBar addSearchInput={this.handleAddSearchBarInputToAppState} />

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
            {this.state.selectedGif.images && (
              <SelectedGif selected={this.state.selectedGif.images} />
            )}

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

export default App;
