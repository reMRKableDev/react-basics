import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GifApp.css";

import SearchBar from "../Search/SearchBar";
import GifList from "../Gifs/GifList";
import SelectedGif from "../Gifs/SelectedGif";

// TODO: Make a functional component version
/* Functional component */
const GifApp = () => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [gifListResults, setGifListResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState({});

  // Function handler that makes an api call to fetch gifs.
  // The gif results are the updated when the call is made.
  const handleSearchForGif = () => {
    const API_KEY = "FN5bl5OrR6NlDWGWNhT1F60hblyHMCGt";
    const searchInput = searchBarInput ? searchBarInput : "kanye west";

    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_KEY}&limit=5`
      )
      .then((gifResults) => setGifListResults(gifResults.data.data))
      .catch((error) => console.error(`Something went wrong: ${error}`));
  };

  // useEffect() is used to mimic the behavior of componentDidMount() & componentDidUpdate()
  // useEffects takes two parameters:
  //  1. handleSearchForGif - A callback function which is the action that should happen when a component either mounts or is updated.
  // 2. [searchBarInput] - The value that is monitored when an update occurs.
  useEffect(()=>{
    handleSearchForGif();
    // eslint-disable-next-line
  }, [searchBarInput]);

  // Function handler for updating the 'searchInput' state.
  // This function is passed down as a prop and used in the SearchBar component.
  const handleAddSearchBarInputToAppState = (searchInput) =>
    setSearchBarInput(searchInput);

  // Function handler for updating the 'selectedGif' state.
  // This function is passed down as a prop and used in the SearchBar component.
  const handleSelectedGif = (chosenGif) => setSelectedGif(chosenGif);

  // Function handler for updating the 'selectedGif' state
  // This function is passed down as a prop and used by the button that unmounts the SelectedGif
  // const handleToggleSelectedGif = () => setSelectedGif({});

  return (
    <section className="app">
      <h1>
        <span>Gif</span>-ted experience
      </h1>

      <SearchBar addSearchInput={handleAddSearchBarInputToAppState} />

      <div className="content">
        {gifListResults.length ? (
          <GifList
            gifResults={gifListResults}
            selectGifClick={handleSelectedGif}
          />
        ) : (
          "Loading data from giphy... "
        )}

        <div className="selected-gif-result">
          {selectedGif && <SelectedGif selected={selectedGif.images} />}
        </div>
      </div>
    </section>
  );
};

export default GifApp;
