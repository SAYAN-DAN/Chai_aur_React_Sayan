import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);

  const addValue = function () {
    // if (count < 30) {
    //   setCount(count+1)
    // }

    // count = count +1
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  };

  const removeValue = function () {
    //  if (count > 0) {
    //   setCount(count - 1)
    //  }
  };

  return (
    <>
      <h1 className="mb-6 text-7xl bg-gray-950 p-6">Sayan Dan</h1>
      <button className="mb-5 bg-slate-950 " onClick={addValue}>
        Add Value:{count}
      </button>
      <br />
      <br />
      <button className="mb-5 bg-slate-950 " onClick={removeValue}>
        Remove Value:{count}
      </button>
    </>
  );
}

export default App;
