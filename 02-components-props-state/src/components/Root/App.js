import React, { Component } from "react";
import "./App.css";
import PetsLength from "../Pets/PetsLength";
import Pets from "../Pets/Pets";
import Counter from "../Counter/Counter";
import CounterHook from "../Counter/CounterHook";
import CounterOldState from "../Counter/CounterOldState";

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
        <h1>Passing data with props</h1>
        <PetsLength totalPets={nestedPetList.length} />
        <Pets petList={nestedPetList} />
        <hr />
        <h1>State</h1>
        <CounterOldState />
        <Counter />
        <CounterHook />
      </section>
    );
  }
}

export default App;
