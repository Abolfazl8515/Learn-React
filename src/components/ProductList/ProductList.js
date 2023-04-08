import { useProducts, useProductsActions } from "../AppProvider";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();
  return !products.length > 0 ? (
    <h1>Your cart is empty</h1>
  ) : (
    products.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          id={product.id}
          onDelete={() => dispatch({ type: "removeCart", id: product.id })}
          increment={() =>
            dispatch({ type: "incrementHandler", id: product.id })
          }
          decrement={() =>
            dispatch({ type: "decrementHandler", id: product.id })
          }
          changeTitle={(e) =>
            dispatch({ type: "changeTitleHandler", id: product.id, e })
          }
        />
      );
    })
  );
};

export default ProductList;