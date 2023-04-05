import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

const ProductList = ({
  removeCart,
  incrementHandler,
  decrementHandler,
  changeTitleHandler,
  products,
}) => {
  return !products.length > 0 ? (
    <h1>Your cart is empty</h1>
  ) : (
    products.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          id={product.id}
          onDelete={() => removeCart(product.id)}
          increment={() => incrementHandler(product.id)}
          decrement={() => decrementHandler(product.id)}
          changeTitle={(e) => changeTitleHandler(e, product.id)}
        />
      );
    })
  );
};

export default ProductList;

/*
  return products.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        id={product.id}
        onDelete={() => removeCart(product.id)}
        increment={() => incrementHandler(product.id)}
        decrement={() => decrementHandler(product.id)}
        changeTitle={(e) => changeTitleHandler(e, product.id)}
      />
    );
  });
*/
