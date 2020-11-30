import React from "react";
import axios from "axios";
import "./App.css";

/* Simple Example of Lifecycle Methods */
import CounterApp from "../CounterApp/CounterRoot/CounterApp";

/* A More Complex Example - combines class components & functional components  */
import GifApp from "../GiphyApp/GifRoot/GifApp";

import GifAppHooksOnly from "../GiphyAppFunctionalOnly/GifRoot/GifApp";

const App = () => {
  return (
    <section className="app">
      {/* <CounterApp /> */}
      {/* <GifApp /> */}
      <GifAppHooksOnly />
    </section>
  );
};

export default App;
