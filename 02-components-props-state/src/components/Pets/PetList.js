import React from "react";
import Pet from "./Pet";

const PetList = (props) => {
  return props.nestedPetListFromApp.map((pet) => (
    <Pet key={pet.id} pet={pet} onClickHandler={props.onClickHandler} />
  ));
};

export default PetList;
