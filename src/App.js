import React, { Component, useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
class App extends Component {
  state = {
    products: [
      { id: 1, title: "react", price: "99$", quantity: 1 },
      { id: 2, title: "js", price: "89$", quantity: 1 },
      { id: 3, title: "git", price: "79$", quantity: 1 },
    ],
  };

  removeCart = (id) => {
    const findedProduct = this.state.products.filter((p) => p.id !== id);

    this.setState({ products: findedProduct });
  };

  incrementHandler = (id) => {
    const cloneProducts = [...this.state.products];
    const product = cloneProducts.find((p) => p.id === id);
    product.quantity++;
    this.setState({ products: cloneProducts });
  };

  decrementHandler = (id) => {
    const cloneProducts = [...this.state.products];
    const product = cloneProducts.find((p) => p.id === id);
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      this.removeCart(id);
      return;
    }
    this.setState({ products: cloneProducts });
  };

  changeTitleHandler = (e, id) => {
    const cloneProducts = [...this.state.products];
    const product = cloneProducts.find((p) => p.id === id);
    product.title = e.target.value;
    this.setState({ products: cloneProducts });
    console.log(e.target.value);
  };

  render() {
    return (
      <div id="container" className={styles.mydiv}>
        <Navbar totalItems={this.state.products.length} />
        <ProductList
          products={this.state.products}
          removeCart={this.removeCart}
          incrementHandler={this.incrementHandler}
          decrementHandler={this.decrementHandler}
          changeTitleHandler={this.changeTitleHandler}
        />
      </div>
    );
  }
}

// const App = () => {
//   return <HookArray />;

//   const [products, setProducts] = useState([
//     { title: "react", price: "89$" },
//     { title: "js", price: "79$" },
//     { title: "git", price: "69$" },
//   ]);

//   const changePriceHandler = () => {
//     setProducts([
//       { title: "react", price: "69$" },
//       { title: "js", price: "29$" },
//       { title: "git", price: "19$" },
//     ]);
//   };

//   return (
//     <div id="container" className="mydiv">
//       <h1>this is App</h1>
//       {products.map((product) => {
//         return <Product name={product.title} price={product.price} />;
//       })}
//       <button onClick={changePriceHandler}>change price</button>
//     </div>
//   );
// };

export default App;
