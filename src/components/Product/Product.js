import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.product} id={props.id}>
      <p>Product name : {props.product.title}</p>
      <p>Product price : {props.product.price}</p>
      <input
        type="text"
        onChange={props.changeTitle}
        value={props.product.title}
      />
      <button onClick={props.click} className={styles.deleteBtn}>
        Delete
      </button>
      <div className={styles.btns}>
        <button className={styles.incrementBtn} onClick={props.increment}>
          +
        </button>
        <p className={styles.numCart}>{props.product.quantity}</p>
        <button className={styles.decrementBtn} onClick={props.decrement}>
          {props.product.quantity == 1 ? <i class="bi bi-trash3"></i> : "-"}
        </button>
      </div>
    </div>
  );
};

export default Product;
