import React, { Component } from "react";
import "./Counter.css";

/* Class Components with State */
class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrementClick = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="counter-container">
        <h3>Class component with state the modern way</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrementClick}>-</button>
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }
}

export default Counter;
