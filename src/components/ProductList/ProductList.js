import { useState } from "react";
import Product from "../Product/Product";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "react", price: "99$", quantity: 1 },
    { id: 2, title: "js", price: "89$", quantity: 1 },
    { id: 3, title: "git", price: "79$", quantity: 1 },
  ]);
  const removeCart = (id) => {
    const findedProduct = products.filter((p) => p.id !== id);

    setProducts(findedProduct);
  };

  const incrementHandler = (id) => {
    const cloneProducts = [...products];
    const product = cloneProducts.find((p) => p.id === id);
    product.quantity++;
    setProducts(cloneProducts);
  };

  const decrementHandler = (id) => {
    const cloneProducts = [...products];
    const product = cloneProducts.find((p) => p.id === id);
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      removeCart(id);
      return;
    }
    setProducts(cloneProducts);
  };

  const changeTitleHandler = (e, id) => {
    const cloneProducts = [...products];
    const product = cloneProducts.find((p) => p.id === id);
    product.title = e.target.value;
    setProducts(cloneProducts);
    console.log(e.target.value);
  };

  return (
    <>
      {!products.length ? (
        <h1>Your cart is empty</h1>
      ) : (
        products.map((product, index) => {
          return (
            <Product
              product={product}
              key={product.id}
              id={product.id}
              click={() => removeCart(product.id)}
              increment={() => incrementHandler(product.id)}
              decrement={() => decrementHandler(product.id)}
              changeTitle={(e) => changeTitleHandler(e, product.id)}
            />
          );
        })
      )}
    </>
  );
};

export default ProductList;
