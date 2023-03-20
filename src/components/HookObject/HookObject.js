import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const changeFirstNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const changeLastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <form>
      <input type="text" onChange={changeFirstNameHandler} />
      <input type="text" onChange={changeLastNameHandler} />
      <h2>My firstName is : {user.firstName}</h2>
      <h2>My lastName is : {user.lastName}</h2>
      {JSON.stringify(user)}
    </form>
  );
};

export default HookObject;
