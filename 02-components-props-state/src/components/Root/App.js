import React, { Component } from "react";
import "./App.css";

/* Imported components */
import PetList from "../Pets/PetList";
import Counter from "../Counter/Counter";
import CounterOldState from "../Counter/CounterOldState";
import CounterHook from "../Counter/CounterHook";

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

/* Class Component */
class App extends Component {
  state = {
    selectedPet: "",
  };

  handleSelectedClick = (incomingPet) => {
    this.setState({ selectedPet: incomingPet });
  };

  render() {
    return (
      <section className="app">
        <h1>Props</h1>
        <p>
          The selected pet is <b>{this.state.selectedPet}</b>
        </p>

        <div className="container">
          <PetList
            nestedPetListFromApp={nestedPetList}
            onClickHandler={this.handleSelectedClick}
          />
        </div>
        <h1>State</h1>
        <div className="container">
          <CounterOldState />
          <Counter />
          <CounterHook />
        </div>
      </section>
    );
  }
}

export default App;
