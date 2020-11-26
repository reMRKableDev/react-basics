import React, { useState, useEffect } from "react";

const CounterHook = (props) => {
  const [count, setCount] = useState(0);
  const [countFromApp, setCountFromApp] = useState(props.countProps);

  // Change counter state in the application
  const handleCountIncrement = () => {
    setCount(count + 1);
    setCountFromApp(countFromApp + 2);
  };

  const handleCountDecrement = () => {
    setCount(count - 1);
    setCountFromApp(countFromApp - 2);
  };

  // using useEffect to mimic lifecycle methods
  /* useEffect(() => {
    console.log("Component DID MOUNT.");

    console.log("Component Counter UPDATED from: ", count);
    console.log("Component Counter UPDATED from: ", countFromApp);
    return () => {
      console.log(
        "Behavior right before the component is removed from the DOM."
      );
    };
  }, [count, countFromApp]); */

  useEffect(() => {
    console.log("Component DID MOUNT.");

    console.log("Component Counter UPDATED from: ", count);
    console.log("Component Counter UPDATED from: ", countFromApp);

    return () => {
      console.log(
        "Behavior right before the component is removed from the DOM."
      );
    };
  }, [count, countFromApp]);

  return (
    <div>
      <h1>The state count value is: {count}</h1>
      <h1>The props count value is: {countFromApp}</h1>
      <button onClick={() => handleCountDecrement()}>-</button>
      <button onClick={() => handleCountIncrement()}>+</button>
    </div>
  );
};

export default CounterHook;
