import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header";
import Boxes from "./Components/Boxes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Boxes />
    </div>
  );
}

export default App;
