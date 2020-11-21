import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Pets from "./Pets";

/* Class component */
class App extends Component {
  render() {
    const nestedPetList = [
      {
        id: 1,
        name: "Whiskers",
        type: "Cat",
      },
      {
        id: 2,
        name: "Goofy",
        type: "Dog",
      },
      {
        id: 3,
        name: "Alvin",
        type: "Chipmunk",
      },
    ];

    return (
      <section className="App">
        <Header totalPets={nestedPetList.length} />
        <Pets petList={nestedPetList} />
      </section>
    );
  }
}

export default App;
