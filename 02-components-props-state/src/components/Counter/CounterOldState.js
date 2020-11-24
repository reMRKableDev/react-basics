import React, { Component } from "react";
import "./Counter.css";

class CounterOldState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    /* We need to implicitly tell our constructor which methods we want to bind to the class. */
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }

  handleIncrementClick() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrementClick() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="counter-container">
        <h3>Class component with state the old way</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrementClick}>-</button>
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }
}

export default CounterOldState;
