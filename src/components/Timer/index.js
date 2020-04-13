import React from "react";

function Timer({ time, startTimer }) {
  return (
    <div>
      <p>Time:{time}</p>
    </div>
  );
}

export default Timer;

//<button onClick={startTimer}>Start Timer</button>
