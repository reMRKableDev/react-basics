import React, { Component } from "react";
import "./Gifs.css";

class SelectedGif extends Component {
  state = {
    selectedGifResult: "",
  };

  componentDidMount() {
    this.setState({ ...this.state, selectedGifResult: this.props.selected });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({ ...this.state, selectedGifResult: this.props.selected });
    }
  }

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
