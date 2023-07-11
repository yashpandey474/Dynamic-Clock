import React, { useState } from "react";

function App() {
  const [state, setState] = useState(new Date().toLocaleTimeString());

  function showTime() {
    setState(new Date().toLocaleTimeString());
  }
  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
