import React from "react";
import "./Gifs.css";

/* Gif Component - renders the individual gifs */
const Gif = ({ gif, selectGifClick }) => {
  return (
    <img
      className="gif"
      src={gif.images.downsized_large.url}
      alt="gif"
      onClick={() => selectGifClick(gif)}
    />
  );
};

export default Gif;
