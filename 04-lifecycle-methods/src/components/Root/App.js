import React from "react";
import axios from "axios";
import "./App.css";

/* Simple Example of Lifecycle Methods */
import CounterApp from "../CounterApp/CounterRoot/CounterApp";

/* A More Complex example */
import GifApp from "../GiphyApp/GifRoot/GifApp";

const App = () => {
  return (
    <section className="app">
      {/* <CounterApp /> */}
      <GifApp />
    </section>
  );
};

export default App;
