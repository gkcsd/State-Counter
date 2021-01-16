import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter App Using State</h1>
      <header>
        <h2>The current value of counter is {counter}</h2>
      </header>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
      <button onClick={() => (counter > 9 ? counter : setCounter(counter + 1))}>
        Increase Counter
      </button>
      <button onClick={() => (counter < 1 ? counter : setCounter(counter - 1))}>
        Decrease Counter
      </button>
    </div>
  );
};
export default App;
