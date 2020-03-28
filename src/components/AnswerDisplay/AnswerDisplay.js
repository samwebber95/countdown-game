import React from "react";

function AnswerDisplay({ answers, answer }) {
  return (
    <ul>
      {answers.map((item, i) => {
        return <li>{answer}</li>;
      })}
    </ul>
  );
}

export default AnswerDisplay;
