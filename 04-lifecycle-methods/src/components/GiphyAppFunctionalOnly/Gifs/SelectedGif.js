import React, { useState, useEffect } from "react";
import "./Gifs.css";

/* SelectedGif Component - the user selected gif */
const SelectedGif = ({ selected }) => {
  const [selectedGifResult, setSelectedGifResult] = useState("");

  // useEffect() is used to mimic the behavior of componentDidMount() , componentDidUpdate()
  // useEffects takes two parameters:
  //  1. () => {} - A callback function which is the action that should happen when a component either mounts or is updated.
  // 2. [selected] - The value that is monitored when an update occurs.
  useEffect(() => {
    setSelectedGifResult(selected);
  }, [selected]);


  return (
    <div className="gif-selected">
      {selectedGifResult && (
        <img src={selectedGifResult.downsized_large.url} alt="gif" />
      )}
    </div>
  );
};

export default SelectedGif;
