import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

const ProductList = (props) => {
  return (
    <>
      {!props.products.length ? (
        <h1>Your cart is empty</h1>
      ) : (
        props.products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              id={product.id}
              click={() => props.removeCart(product.id)}
              increment={() => props.incrementHandler(product.id)}
              decrement={() => props.decrementHandler(product.id)}
              changeTitle={(e) => props.changeTitleHandler(e, product.id)}
            />
          );
        })
      )}
    </>
  );
};

export default ProductList;
