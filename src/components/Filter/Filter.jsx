import { useState } from "react";
import { useProductsActions } from "../AppProvider";
import SelectComponent from "../../common/Select/Select";
import styles from "./Filter.module.css";
import Search from "../../common/Search/Search";

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
  const [valueSize, setValueSize] = useState({ value: "All", label: "All" });
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
      <SelectComponent
        value={valueSize}
        onChange={changeSizeHandler}
        options={optionsSize}
      />
      <SelectComponent
        value={valuePrice}
        onChange={changePriceHandler}
        options={optionsPrice}
      />
      <Search filter={valueSize} sort={valuePrice} />
    </div>
  );
};

export default Filter;
