import React, { useContext, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDisptchrer = React.createContext();

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDisptchrer.Provider value={setCount}>
        {children}
      </CounterContextDisptchrer.Provider>
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
  const setCount = useContext(CounterContextDisptchrer);
  const addOne = () => setCount((prevState) => prevState + 1);
  const addTwo = () => setCount((prevState) => prevState + 2);
  const decrement = () => setCount((prevState) => prevState - 1);

  return { addOne, addTwo, decrement };
};
