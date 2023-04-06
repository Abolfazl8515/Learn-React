import { useCount, useCountActions } from "./CounterContextProvider";

const CounterOne = () => {
  const count = useCount();
  const { addOne, addTwo, decrement } = useCountActions();
  return (
    <div>
      count is {count}
      <button onClick={addOne}>Add one</button>
      <button onClick={addTwo}>Add one</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterOne;
