import React, { useState } from "react";
import "./App.css";
import Display from "../Display/index";
import Answers from "../Answers/index";

function App() {
  const [letters, setLetters] = useState([]);

  return (
    <div className="App">
      <Display letters={letters} setLetters={setLetters} />
      <Answers />
    </div>
  );
}

export default App;
