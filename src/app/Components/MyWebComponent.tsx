import React from "react";

const MyWebComponent: React.FC<{}> = () => {
  const url = new URL("../utils/worker.js", window.location.href).pathname;
  console.log(url);
  const worker = new Worker(url);

  return (
    <div>
      <p>Result from the worker: </p>
      <button onClick={() => console.log("from worker thread")}>
        Calculate in Web Worker
      </button>
      <button type="button" onClick={() => console.log("from main thread")}>
        Log Message in console
      </button>
    </div>
  );
};

export default MyWebComponent;
