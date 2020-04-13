import React from "react";

function Score({ roundScore, totalScore }) {
  return (
    <div>
      <p>Round Score:{roundScore}</p>
      <p>Total Score:{totalScore}</p>
    </div>
  );
}

export default Score;
