import React, { Component } from "react";
import "./Gifs.css";

/* SelectedGif Component - the user selected gif */
class SelectedGif extends Component {
  state = {
    selectedGifResult: "",
  };

  // Lifecycle method that executes when the component first renders.
  // Sets the 'selectedGifResult' state in the component.
  componentDidMount() {
    this.setState({ ...this.state, selectedGifResult: this.props.selected });
  }

  // Lifecycle method that executes when the component updates.
  // Updates the 'selectedGifResult' state when the incoming props change.
  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({ ...this.state, selectedGifResult: this.props.selected });
    }
  }

  // Lifecycle method that executes when the component unmounts.
  // Will show an alert that the gif is going to be removed from the user's view.
  componentWillUnmount() {
    alert(`Selected Gif will be removed!`);
  }

  render() {
    return (
      <div className="gif-selected">
        <img src={this.props.selected.downsized_large.url} alt="gif" />
      </div>
    );
  }
}

export default SelectedGif;
