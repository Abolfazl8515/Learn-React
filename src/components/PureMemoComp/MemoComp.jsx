import React from "react";

const MemoComp = (props) => {
  console.log("Memo Comp");
  return <div>Memo name is {props.name}</div>;
};

export default React.memo(MemoComp);
