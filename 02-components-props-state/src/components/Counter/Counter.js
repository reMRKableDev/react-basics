import React, { Component } from "react";
import "./Counter.css";

/* Class Components with State */
class Counter extends Component {
  state = {
    count: 0,
    age: 23,
  };

  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1, age: this.state.age + 10 });
  };

  handleDecrementClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <h3>Class component with state the modern way</h3>
        <p>{this.state.count}</p>
        <p>{this.state.age}</p>

        {this.state.age > 33 ? <p>Hello Ceyda!</p> : null}
        
        <button onClick={this.handleDecrementClick}>-</button>
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }
}

export default Counter;
