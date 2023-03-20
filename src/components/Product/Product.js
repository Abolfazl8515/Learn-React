import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>Product name : {props.name}</p>
      <p>Product price : {props.price}</p>
      {props.children}
    </div>
  );
};

export default Product;
