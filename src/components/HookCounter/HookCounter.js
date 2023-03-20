import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };
  const addFiveHandler = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return (
    <div>
      <h1>count is : {count}</h1>
      <button onClick={addOneHandler}>addOne</button>
      <button onClick={addTwoHandler}>addTwo</button>
      <button onClick={addFiveHandler}>addFive</button>
    </div>
  );
};

export default HookCounter;
