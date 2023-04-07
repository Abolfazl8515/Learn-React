import { useReducer } from "react";

const initialState = 0;
const reducer = (state, aciton) => {
  console.log(aciton);
  switch (aciton.type) {
    case "add":
      return state + aciton.value;
    case "decrement":
      return state - aciton.value;
    default:
      return state;
  }
};

const ReducerCount = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count is {count}</h2>
      <h2>count is {countTwo}</h2>
      <div className="one">
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          Add one
        </button>
        <button onClick={() => dispatch({ type: "add", value: 2 })}>
          Add two
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          Add five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
      </div>
      <div className="two">
        <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
          Add2 one
        </button>
        <button onClick={() => dispatchTwo({ type: "add", value: 2 })}>
          Add2 two
        </button>
        <button onClick={() => dispatchTwo({ type: "add", value: 5 })}>
          Add2 five
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          Decrement2
        </button>
      </div>
    </div>
  );
};

export default ReducerCount;
