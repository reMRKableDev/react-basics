import React from "react";
import Pet from "./Pet";
import "./Pets.css";

/* Functional Component */
const PetList = (props) => {
  const showPets = () =>
    props.petList.map((pet) => (
      <Pet
        key={pet.id}
        pet={pet}
        handleSelectedClick={props.handleSelectedClick}
      />
    ));

  return showPets();
};

export default PetList;
