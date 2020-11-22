import React, { Component } from "react";

class AddMovie extends Component {
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    // Call the parent passed function
    this.props.addTheMovie(this.state);

    // Reset
    this.setState({
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating: "",
    });
  };

  handleChange(event) {
    let { name, value, type } = event.target;

    // special case for checkboxes (where boolean value is hold in .checked property)
    if (type === "checkbox") {
      value = event.target.checked;
    }

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={this.state.director}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Oscar Awarded:</label>
          <input
            type="checkbox"
            name="hasOscars"
            checked={this.state.hasOscars}
            onChange={(e) => this.handleChange(e)}
          />

          <label>IMDb Rating:</label>
          <input
            type="text"
            name="IMDbRating"
            value={this.state.IMDbRating}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Main Actor:</label>
          <input
            type="text"
            name="actor"
            value={this.state.actor}
            onChange={(e) => this.handleChange(e)}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
