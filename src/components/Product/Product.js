const Product = (props) => {
  return (
    <div>
      <p>Product name : {props.name}</p>
      <p>Product price : {props.price}</p>
      {props.children}
    </div>
  );
};

export default Product;
