import { useState } from "react";
import Counter from "../Hoc/counter";

const ClickCount = ({ count, incrementHandler }) => {
  return <button onClick={incrementHandler}>clicked {count} times</button>;
};

export default Counter(ClickCount, 5);
