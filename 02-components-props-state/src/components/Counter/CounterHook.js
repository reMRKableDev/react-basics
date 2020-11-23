import React, { useState } from "react";
import "./Counter.css";

/* Functional Components with State (using hooks) */
const CounterHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => setCount(count + 1);
  const handleDecrementClick = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h3>Functional component with state using hooks</h3>
      <p>{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  );
};

export default CounterHook;
