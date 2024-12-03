import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Count state
  const [step, setStep] = useState(1); // Step state

  const date = new Date("Jun 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      {/* Step Row */}
      <div className="row">
        <button onClick={() => setStep((s) => Math.max(1, s - 1))}>-</button>
        <h1>Step: {step}</h1>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      {/* Count Row */}
      <div className="row">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      {/* Display Date */}
      <span>
        <p>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </p>
        <span>{date.toDateString()}</span>
      </span>
    </div>
  );
}

export default App;
