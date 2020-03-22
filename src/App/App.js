import React, { useState } from "react";
import "./App.css";
import Display from "../Display/index";

function App() {
  const [letters, setLetters] = useState([]);

  return (
    <div className="App">
      <Display letters={letters} setLetters={setLetters} />
    </div>
  );
}

export default App;
