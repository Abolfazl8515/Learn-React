import React, { useContext, useReducer } from "react";
import { productsData } from "../db/products";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

// const initialState = [
//   { id: 1, title: "react", price: "99$", quantity: 1 },
//   { id: 2, title: "js", price: "89$", quantity: 2 },
//   { id: 3, title: "git", price: "79$", quantity: 1 },
// ];
const reducer = (state, aciton) => {
  console.log(aciton);
  switch (aciton.type) {
    case "removeCart":
      const findedProduct = state.filter((p) => p.id !== aciton.id);
      return findedProduct;
    case "incrementHandler":
      const indexInc = state.findIndex((item) => item.id === aciton.id);
      const productInc = { ...state[indexInc] };
      productInc.quantity++;
      const updatedProductsInc = [...state];
      updatedProductsInc[indexInc] = productInc;
      return updatedProductsInc;
    case "decrementHandler":
      const indexDec = state.findIndex((item) => item.id === aciton.id);
      const productDec = { ...state[indexDec] };
      if (productDec.quantity > 1) {
        productDec.quantity--;
      } else {
        const findedProduct = state.filter((p) => p.id !== aciton.id);
        return findedProduct;
      }
      const updatedProductsDec = [...state];
      updatedProductsDec[indexDec] = productDec;
      return updatedProductsDec;
    case "changeTitleHandler":
      const indexTitle = state.findIndex((item) => item.id === aciton.id);
      const productTitle = { ...state[indexTitle] };
      const updatedProductsTitle = [...state];
      productTitle.title = aciton.e.target.value;
      updatedProductsTitle[indexTitle] = productTitle;
      return updatedProductsTitle;
    case "filter":
      if (aciton.e.value !== "All") {
        return productsData.filter(
          (p) => p.availableSizes.indexOf(aciton.e.value) >= 0
        );
      } else {
        return productsData;
      }

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default AppProvider;
export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => useContext(ProductsContextDispatcher);
