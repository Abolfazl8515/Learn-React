import { useCount, useCountActions } from "./CounterContextProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountActions();
  return (
    <div>
      <div>count is {count}</div>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        Add one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 2 })}>
        Add two
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default CounterOne;
