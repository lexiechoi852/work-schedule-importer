import React, { useState } from "react";

import "./App.css";

import type { JSX } from "react";

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)} type="button">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  );
};

export default App;
