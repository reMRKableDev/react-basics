import React from "react";
import Pet from "./Pet";

const PetList = ({ nestedPetListFromApp, onClickHandler }) => {
  return nestedPetListFromApp.map((petItem) => (
    <Pet key={petItem.id} pet={petItem} onClickHandler={onClickHandler} />
  ));
};

export default PetList;
