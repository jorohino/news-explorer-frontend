import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>What's going on in the world?</h1>
      <p>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
    </>
  );
}

export default App;
