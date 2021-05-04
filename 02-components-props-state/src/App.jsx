import React, { Component } from "react";
import "./App.css";

/* Nested Data */
import { nestedPetList } from "./data";

/* Imported components */
import PetList from "./components/Pets/PetList";
import Counter from "./components/Counter/Counter";
import CounterHook from "./components/Counter/CounterHook";
import CounterOldState from "./components/Counter/CounterOldState";

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
          The selected pet is <b>{this.state.selectedPet.name}</b>
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
