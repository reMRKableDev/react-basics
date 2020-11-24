import React from "react";
import "./Pets.css";

/* Functional component with destructuring of props */
/* const Pet = ({ pet, onClickHandler }) => {
  const onClickHandlerForPet = () => onClickHandler(pet);

  return (
    <article className="pet-container">
      <h3>Id # {pet.id}</h3>
      <p>Name: {pet.name}</p>
      <p>Type: {pet.type}</p>
      <button onClick={onClickHandlerForPet}>Select Pet</button>
    </article>
  );
}; */

/* Functional component with props object */
/* const Pet = (props) => {
  const onClickHandlerForPet = () => onClickHandler(props.pet);

  return (
    <article className="pet-container">
      <h3>Id # {props.pet.id}</h3>
      <p>Name: {props.pet.name}</p>
      <p>Type: {props.pet.type}</p>
      <button onClick={onClickHandlerForPet}>Select Pet</button>
    </article>
  );
}; */

/* Class component with props */
class Pet extends React.Component {
  onClickHandlerForPet = () => this.props.onClickHandler(this.props.pet);
  
  render() {
    return (
      <article className="pet-container">
        <h3>Id # {this.props.pet.id}</h3>
        <p>Name: {this.props.pet.name}</p>
        <p>Type: {this.props.pet.type}</p>
        <button onClick={this.onClickHandlerForPet}>Select Pet</button>
      </article>
    );
  }
}

export default Pet;
