import React from "react";

function Timer({ time, startTimer }) {
  return (
    <div>
      <p>Time:{time}</p>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
}

export default Timer;

//<button onClick={startTimer}>Start Timer</button>
