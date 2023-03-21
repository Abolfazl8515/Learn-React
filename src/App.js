import React, { Component, useState } from "react";
import styles from "./App.module.css";
import ProductList from "./components/ProductList/ProductList";
class App extends Component {

  render() {
    return (
      <div id="container" className={styles.mydiv}>
        <h1>this is App</h1>
        <ProductList/>
        
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
