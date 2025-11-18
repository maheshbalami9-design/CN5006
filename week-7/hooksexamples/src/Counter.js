import React from "react";
import "./App.css";
import { useState } from 'react';

function Hook_ControlledButtonState() {
  
  // Step 3: Initialize State
  const [count, setCount] = useState(0);

  // Step 3: Create Click Event Handler
  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App-header">
      <form>
        <h1>Click Counts are {count}</h1>

        <button type="button" onClick={ClickHandle}>
          Click me {count}
        </button>
      </form>
    </div>
  );
}

export default Hook_ControlledButtonState;
