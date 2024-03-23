import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //  let counter = 15
  const addValue = function () {
    // console.log("clicked", Math.random());
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = function () {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello Sayan Dan</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}> Add Value:{counter} </button>
      <br />
      <br />
      <button onClick={removeValue}> Remove Value:{counter} </button>
    </>
  );
}

export default App;
