import { useEffect } from "react";
import styles from "./Product.module.css";
import { FaTrashAlt } from "react-icons/fa";

const Product = ({
  product,
  id,
  changeTitle,
  onDelete,
  increment,
  decrement,
}) => {
  return (
    <div className={styles.product} id={id}>
      <p>Product name : {product.title}</p>
      <p>Product price : {product.price}</p>
      <input type="text" onChange={changeTitle} value={product.title} />
      <button onClick={onDelete} className={styles.deleteBtn}>
        Delete
      </button>
      <div className={styles.btns}>
        <button className={styles.incrementBtn} onClick={increment}>
          +
        </button>
        <p className={styles.numCart}>{product.quantity}</p>
        <button
          className={
            product.quantity === 1 ? styles.remove : styles.decrementBtn
          }
          onClick={decrement}
        >
          {product.quantity == 1 ? <FaTrashAlt /> : "-"}
        </button>
      </div>
    </div>
  );
};

export default Product;
