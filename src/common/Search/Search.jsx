import { useState } from "react";
import { useProductsActions } from "../../components/AppProvider";
import styles from "./Search.module.css";

const Search = ({ filter, sort }) => {
  const [value, setValue] = useState("");
  const dispatch = useProductsActions();

  const searchHandler = (e) => {
    dispatch({ type: "filterSize", e: filter });
    dispatch({ type: "search", e });
    dispatch({ type: "filterPrice", e: sort });
    setValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
