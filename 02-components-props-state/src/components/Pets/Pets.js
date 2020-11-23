import React from "react";

/* Functional Component */
const Pets = (props) => {
  const showPets = () =>
    props.petList.map((pet) => (
      <article key={pet.id}>
        <h2>Pet # {pet.id}</h2>
        <p>Name: {pet.name}</p>
        <p>Type: {pet.type}</p>
      </article>
    ));

  return showPets();
};

export default Pets;
