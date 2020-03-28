import React, { useState } from "react";
import "./App.css";
import Display from "../Display/index";
import Answers from "../Answers/index";
import RachelRiley from "../RachelRiley/index";

function App() {
  const [letters, setLetters] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <Display letters={letters} setLetters={setLetters} />
      <Answers
        answer={answer}
        answers={answers}
        setAnswer={setAnswer}
        setAnswers={setAnswers}
      />
      <RachelRiley letters={letters} />
    </div>
  );
}

export default App;
