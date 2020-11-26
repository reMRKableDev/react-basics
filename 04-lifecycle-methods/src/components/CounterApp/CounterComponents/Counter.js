import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countFromApp: this.props.countProps,
    };
    console.log("I am in the CONSTRUCTOR of the Counter.js.");
  }

  // Change counter state in the application
  handleCountIncrement = () =>
    this.setState({
      ...this.state,
      count: this.state.count + 1,
      countFromApp: this.state.countFromApp + 2,
    });

  handleCountDecrement = () =>
    this.setState({
      ...this.state,
      count: this.state.count - 1,
      countFromApp: this.state.countFromApp - 2,
    });

  // Lifecycle method #1
  componentDidMount() {
    console.log("Component DID MOUNT.");
  }

  // Lifecycle method #2
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Counter UPDATED from: ", prevState.count);
    console.log("Component Counter UPDATED from: ", prevState.countFromApp);
  }

  // Lifecycle method #3
  componentWillUnmount() {
    console.log("======== Component COUNTER is UNMOUNTED! ========");
  }

  render() {
    console.log("I am in the RENDER of the Counter.");
    return (
      <div>
        <h1>The state count value is: {this.state.count}</h1>
        <h1>The props count value is: {this.state.countFromApp}</h1>
        <button onClick={() => this.handleCountDecrement()}>-</button>
        <button onClick={() => this.handleCountIncrement()}>+</button>
      </div>
    );
  }
}

export default Counter;
