import React from "react";

/* Component */
function Example({ name }) {
  return <p>{name}</p>;
}

/* Component */
class Counter extends React.Component {
  state = {
    count: 0,
    name: this.props.name,
  };

  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrementClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count, name } = this.state;

    return (
      <div>
        <p>{count}</p>
        <button onClick={this.handleDecrementClick}>-</button>
        <button onClick={this.handleIncrementClick}>+</button>
        <Example name={name} />
      </div>
    );
  }
}

export default Counter;
