import { useEffect, useRef, useState } from "react";

const FunctionalRef = () => {
  const prevName = useRef();
  const prevNum = useRef();
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  useEffect(() => {
    prevNum.current = num;
  }, [num]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={prevName}
      />
      <div>State is {name}</div>
      <div>Previous state is {prevName.current}</div>
      <button onClick={() => setNum(Math.floor(Math.random() * 100))}>
        Generate Number
      </button>
      <div>Number is {num}</div>
      <div>Previous Number is {prevNum.current}</div>
    </>
  );
};

export default FunctionalRef;
