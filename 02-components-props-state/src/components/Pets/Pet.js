import React from "react";

const Pet = ({ pet, handleSelectedClick }) => {
  const onClickHandler = () => handleSelectedClick(pet);
  return (
    <article key={pet.id} className="pet-container">
      <h2>Pet # {pet.id}</h2>
      <p>Name: {pet.name}</p>
      <p>Type: {pet.type}</p>
      <button onClick={onClickHandler}>Select Pet</button>
    </article>
  );
};

export default Pet;
