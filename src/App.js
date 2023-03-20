import React, { Component, useState } from "react";
import HookCounter from "./components/HookCounter/HookCounter";
import ClassCounter from "./components/HookCounter/ClassCounter";
import Product from "./components/Product/Product";
import HookObject from "./components/HookObject/HookObject";
import HookArray from "./components/HookArray/HookArray";

// class App extends Component {
//   state = {
//     products: [
//       { title: "react", price: "99$" },
//       { title: "js", price: "89$" },
//       { title: "git", price: "79$" },
//     ],
//   };

//   changePriceHandler = () => {
//     this.setState({
//       products: [
//         { title: "react", price: "69$" },
//         { title: "js", price: "29$" },
//         { title: "git", price: "19$" },
//       ],
//     });
//   };

//   render() {
//     return (
//       <div id="container" className="mydiv">
//         <h1>this is App</h1>
//         {this.state.products.map((product) => {
//           return <Product name={product.title} price={product.price} />;
//         })}
//         <button onClick={this.changePriceHandler}>change price</button>
//       </div>
//     );
//   }
// }

const App = () => {
  return <HookArray />;

  // const [products, setProducts] = useState([
  //   { title: "react", price: "89$" },
  //   { title: "js", price: "79$" },
  //   { title: "git", price: "69$" },
  // ]);

  // const changePriceHandler = () => {
  //   setProducts([
  //     { title: "react", price: "69$" },
  //     { title: "js", price: "29$" },
  //     { title: "git", price: "19$" },
  //   ]);
  // };

  // return (
  //   <div id="container" className="mydiv">
  //     <h1>this is App</h1>
  //     {products.map((product) => {
  //       return <Product name={product.title} price={product.price} />;
  //     })}
  //     <button onClick={changePriceHandler}>change price</button>
  //   </div>
  // );
};

export default App;
