import React, { useState, useEffect } from "react";
const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
      if (timer !== 10) setCounterValue(counterValue + 10);
      else {
        setCounterValue(counterValue - 100);
        setTimer(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <React.Fragment>
      <span>{counterValue}</span>
      <button onClick={() => setCounterValue(counterValue + 1)}></button>
    </React.Fragment>
  );
};

export default Counter;
