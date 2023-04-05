import { useState } from "react";

const Counter = (WrappedComponent, num) => {
  const UpdatedComponent = () => {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
      setCount(count + num);
    };
    return (
      <WrappedComponent count={count} incrementHandler={incrementHandler} />
    );
  };
  return UpdatedComponent;
};

export default Counter;
