import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>数字{counter}</p>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
    </div>
  );
}
