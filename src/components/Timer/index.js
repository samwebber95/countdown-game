import React, { useState, useEffect } from "react";

function Timer({ letters }) {
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(false);

  function startTimer() {
    if (letters.length >= 8) {
      setIsActive(!isActive);
    }
  }

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
  console.log(time);

  return (
    <div>
      <p>Time:{time}</p>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
}

export default Timer;
