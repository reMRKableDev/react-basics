import React, { Component } from "react";

/* Functional Component - getting props via destructuring */
/* const PetsLength = ({ totalPets }) => {
  return (
    <div>
      <h2>The total number of pets is {totalPets}</h2>
    </div>
  );
}; */

/* Class Component - getting props via this.props */
class PetsLength extends Component {
  render() {
    return (
      <div>
        <p>The total number of pets is {this.props.totalPets}</p>
      </div>
    );
  }
}

export default PetsLength;
