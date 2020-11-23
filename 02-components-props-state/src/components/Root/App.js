import React, { Component } from "react";
import "./App.css";
import PetList from "../Pets/PetList";
import Counter from "../Counter/Counter";
import CounterHook from "../Counter/CounterHook";
import CounterOldState from "../Counter/CounterOldState";

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
/* Class component */
class App extends Component {
  state = {
    selectedPet: {},
  };

  handleSelectedClick = (clickedPet) => {
    this.setState({ selectedPet: clickedPet });
  };

  showSelectedPet = () =>
    this.state.selectedPet && (
      <p>The selected pet is {this.state.selectedPet.name}</p>
    );

  render() {
    return (
      <section className="app">
        <h1>Props</h1>
        {this.showSelectedPet()}
        <div className="container">
          <PetList
            petList={nestedPetList}
            handleSelectedClick={this.handleSelectedClick}
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
