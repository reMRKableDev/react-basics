import React from "react";
import "./App.css";
import mario from "./assets/mario.png";
import { pet, petList, nestedPetList } from "./data";

function App() {
  /*
      CREATE A REACT ELEMENT:
        - Using React.createElement --> directly create your element, no JSX.
        - With JSX
  */
  const reactElement = React.createElement(
    "p",
    null,
    "Hi, I'm a React element made without JSX"
  );

  const jsxElement = <p>Hi, I'm a React element made using JSX</p>;

  /* 
    HELPER FUNCTIONS --> for mapping through arrays. 
  */
  const showMyPets = (arrayOfPets) => {
    const eachPet = arrayOfPets.map((pet) => (
      <p>My favorite pet is called {pet}</p>
    ));

    return eachPet;
  };

  const showMyNestedPets = (arrayOfPets) => {
    const eachPet = arrayOfPets.map((pet) => (
      <p>
        My favorite pet is a {pet.type} called {pet.name}. It has the id of{" "}
        {pet.id}
      </p>
    ));

    return eachPet;
  };

  return (
    <section className="App">
      <h1>Getting Started with React</h1>

      <hr />

      <div>
        <h2>Creating React Elements</h2>
        <article>
          <h3>with .createElement()</h3>
          {reactElement}
        </article>

        <article>
          <h3>with JSX</h3>
          {jsxElement}
        </article>
      </div>

      <hr />

      <div>
        <h2>Embedded variables, functions(methods), and function execution</h2>
        <article>
          <h3>Embedded variables</h3>
          <p>
            My favorite pet is a {pet.type} called {pet.name}
          </p>
        </article>

        <article>
          <h3>Embedded functions (methods)</h3>
          <p>
            My favorite pet is a {pet.type.toUpperCase()} called{" "}
            {pet.name.toUpperCase()}
          </p>
        </article>

        <article>
          <h3>Embedded function execution (simple data set)</h3>
          {showMyPets(petList)}
        </article>

        <article>
          <h3>Embedded function execution (nested data set)</h3>
          {showMyNestedPets(nestedPetList)}
        </article>

        <article>
          <h3>Embedded Static Images (in application)</h3>
          <figure>
            <img src={mario} alt="mario" />
            <figcaption>It's Mario!</figcaption>
          </figure>
        </article>

        <article>
          <h3>Embedded Static Images (external link)</h3>
          <figure>
            <img
              src="data:image/jpeg;base64,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"
              alt="mario"
            />
            <figcaption>It's Mario from somewhere else!</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default App;
