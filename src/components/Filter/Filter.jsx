import { useState } from "react";
import { useProductsActions } from "../AppProvider";
import styles from "./Filter.module.css";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "X", label: "X" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    console.log(e);
    dispatch({ type: "filter", e });
    setValue(e);
  };

  return (
    <div className={styles.filter}>
      <Select value={value} onChange={changeHandler} options={options} />
    </div>
  );
};

export default Filter;
