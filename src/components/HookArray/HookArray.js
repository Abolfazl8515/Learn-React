import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);
  const addItem = () => {
    const addedItem = { id: item.length, num: Math.floor(Math.random() * 20) };
    setItem([...item, addedItem]);
  };
  return (
    <div>
      <button onClick={addItem}> Add item</button>
      {item.map((i) => {
        return <li key={i.id}>{i.num}</li>;
      })}
    </div>
  );
};

export default HookArray;
