import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "../Display/index";
import Answers from "../Answers/index";
import RachelRiley from "../RachelRiley/index";
import Timer from "../Timer/index";
// import DisplayList from "../DisplayList/DisplayList";

function App() {
  const [letters, setLetters] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(false);

  //function to add a new answer the the list of answers
  function addToList(newItem) {
    if (letters.length === 8 && isActive) {
      setAnswers([...answers, newItem]);
    }
  }

  // all the logic to handle the timer
  // function that begins the timer, sets isActive to true
  function startTimer() {
    setIsActive(!isActive);
  }

  // function to reset the timer
  function reset() {
    setTime(30);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      reset();
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="App">
      <Display
        letters={letters}
        setLetters={setLetters}
        startTimer={startTimer}
      />
      <Answers
        answer={answer}
        answers={answers}
        setAnswer={setAnswer}
        setAnswers={setAnswers}
        setLetters={setLetters}
        addToList={addToList}
        letters={letters}
      />
      {/* <DisplayList answers={answers} /> */}
      <RachelRiley letters={letters} />
      <Timer time={time} startTimer={startTimer} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

//<AnswerDisplay answer={answer} answers={answers} />
