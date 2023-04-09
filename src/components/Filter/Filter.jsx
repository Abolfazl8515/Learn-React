import { useState } from "react";
import { useProductsActions } from "../AppProvider";
import styles from "./Filter.module.css";
import Select from "react-select";

const optionsSize = [
  { value: "All", label: "All" },
  { value: "X", label: "X" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
];

const optionsPrice = [
  { value: "theMostExpensive", label: "the most expensive" },
  { value: "cheapest", label: "cheapest" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [valueSize, setValueSize] = useState("");
  const [valuePrice, setValuePrice] = useState("");

  const changeSizeHandler = (e) => {
    dispatch({ type: "filterSize", e });
    dispatch({ type: "filterPrice", e: valuePrice });
    setValueSize(e);
  };

  const changePriceHandler = (e) => {
    dispatch({ type: "filterPrice", e });
    setValuePrice(e);
  };

  return (
    <div className={styles.filter}>
      <Select
        value={valueSize}
        onChange={changeSizeHandler}
        options={optionsSize}
      />
      <Select
        value={valuePrice}
        onChange={changePriceHandler}
        options={optionsPrice}
      />
    </div>
  );
};

export default Filter;
