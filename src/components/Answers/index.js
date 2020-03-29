import React from "react";

function Answers({ answer, answers, setAnswer, addToList }) {
  // const [text, setText] = useState("");

  function handleChange(event) {
    setAnswer(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    addToList(answer);
    setAnswer("");
  }

  // function handleKeyDown(event) {
  //   if (event.key === "enter") {
  //     displayAnswer();
  //   }
  // }

  // function displayAnswer(answer) {
  //   setAnswers([...answers, answer]);
  //   console.log(answers);
  // }

  // function handleChange(event) {
  //   setAnswer(event.target.value);
  // }

  // function handleClick() {
  //   addToList(text);
  //   setText("");
  // }

  return (
    <div>
      <input
        onKeyPress={handleKeyDown}
        onChange={handleChange}
        value={answer}
        type="text"
        placeholder="Answer here"
      ></input>
      <p>{answers}</p>
    </div>
  );
}

export default Answers;
