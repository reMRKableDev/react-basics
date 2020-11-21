import React from "react";

/* Functional Component */
const Header = ({ totalPets }) => {
  return (
    <div>
      <h1>The total number of pets is {totalPets}</h1>
    </div>
  );
};

export default Header;
