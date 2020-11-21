import React from "react";

class ExampleComponent extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  } */

  state = {
    value: 0,
  };

  add = () => 2 + 3;

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default ExampleComponent;
