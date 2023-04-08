import React, { useContext, useReducer, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDisptchrer = React.createContext();

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

const CounterContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDisptchrer.Provider value={dispatch}>
        {children}
      </CounterContextDisptchrer.Provider>
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
  return useContext(CounterContextDisptchrer);
  // const addOne = () => setCount((prevState) => prevState + 1);
  // const addTwo = () => setCount((prevState) => prevState + 2);
  // const decrement = () => setCount((prevState) => prevState - 1);

  // return { addOne, addTwo, decrement };
};
