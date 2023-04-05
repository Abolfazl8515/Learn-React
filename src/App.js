import React, { Component } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import ClassTimer from "./components/ClassTimer/ClassTimer";
class App extends Component {
  state = {
    products: [
      { id: 1, title: "react", price: "99$", quantity: 1 },
      { id: 2, title: "js", price: "89$", quantity: 2 },
      { id: 3, title: "git", price: "79$", quantity: 1 },
    ],
    isShow: true,
  };

  removeCart = (id) => {
    const findedProduct = this.state.products.filter((p) => p.id !== id);

    this.setState({ products: findedProduct });
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.quantity++;
    const updatedProducts = [...this.state.products];
    updatedProducts[index] = product;
    this.setState({ products: updatedProducts });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      this.removeCart(id);
      return;
    }
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  changeTitleHandler = (e, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    const updatedProducts = [...this.state.products];
    product.title = e.target.value;
    updatedProducts[index] = product;
    this.setState({ products: updatedProducts });
  };

  render() {
    return (
      <>
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          {this.state.isShow ? "Hide" : "Show"}
        </button>
        {this.state.isShow && <ClassTimer />}
      </>
      // <div id="container" className={styles.mydiv}>
      //   <Navbar totalItems={this.state.products.length} />
      //   <ProductList
      //     products={this.state.products}
      //     removeCart={this.removeCart}
      //     incrementHandler={this.incrementHandler}
      //     decrementHandler={this.decrementHandler}
      //     changeTitleHandler={this.changeTitleHandler}
      //   />
      // </div>
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
