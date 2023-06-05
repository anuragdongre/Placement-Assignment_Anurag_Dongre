import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      
      setCount(count - 1 );
    }
  };

  const reset =() => {
    setCount(0);
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count:{count}</p>
      <button className="btnI" onClick={increment}>Increment</button>
      <button className="btnD" onClick={decrement}>Decrement</button>
      <button className="btnR" onClick={reset}>Recet</button>
    </div>
  );
}

export default App;
