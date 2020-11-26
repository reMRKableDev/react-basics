import React, { useState } from "react";

import Counter from "../CounterComponents/Counter";
import CounterHook from "../CounterComponents/CounterHook";

const CounterApp = () => {
  const [isRunning, setIsRunning] = useState(true);

  const stopCounter = () => setIsRunning(false);

  return isRunning ? (
    <div className="App">
      <h2>
        Clicking this button will destroy the Counter component and clear the
        state.
      </h2>
      <button onClick={stopCounter}>Dismount the counter</button>

      <Counter countProps={0} />

      <CounterHook countProps={0} />
    </div>
  ) : null;
};

export default CounterApp;
