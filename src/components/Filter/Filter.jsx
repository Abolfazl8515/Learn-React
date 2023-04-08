import { useProductsActions } from "../AppProvider";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useProductsActions();
  return (
    <div
      className={styles.filter}
      onChange={(e) => dispatch({ type: "filter", e })}
    >
      <select>
        <option value="All">All</option>
        <option value="X">X</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="S">S</option>
        <option value="M">M</option>
      </select>
    </div>
  );
};

export default Filter;
