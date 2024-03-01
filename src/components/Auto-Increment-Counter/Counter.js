import React, { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [pause,setPause] = useState(false)
  let interval = useRef(null);
  useEffect(() => {
    startTimer();
    return () => {
        if(interval.current) {
            clearInterval(interval.current)
        }
    } 
  },[]);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    if(pause) {
        setPause(false)
    }
  };
  const resetTimer = () => {
    clearInterval(interval.current);
    setCount(0);
    setPause(true)
  };
  const stopTimer = () => {
    clearInterval(interval.current)
    setPause(true)
  }
  return (
    <div>
      <h2>Count - {count}</h2>
      <div>
        <button onClick={pause ? startTimer : stopTimer}>{pause ? "Start" : "Stop"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
