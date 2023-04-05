import Counter from "../Hoc/counter";

const HoverCount = ({ count, incrementHandler }) => {
  return <button onMouseOver={incrementHandler}>Hovered {count} times</button>;
};

export default Counter(HoverCount,10);
