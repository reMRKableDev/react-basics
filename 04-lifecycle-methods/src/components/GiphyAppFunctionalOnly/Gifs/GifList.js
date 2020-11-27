import React from "react";
import Gif from "./Gif";
import "./Gifs.css";

/* GifList component - that maps through and incoming list */
const GifList = ({ gifResults, selectGifClick }) => {
  return (
    <div className="gif-list">
      {gifResults.map((gifItem) => (
        <Gif key={gifItem.id} gif={gifItem} selectGifClick={selectGifClick} />
      ))}
    </div>
  );
};

export default GifList;
