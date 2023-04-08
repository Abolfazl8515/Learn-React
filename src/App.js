import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import AppProvider from "./components/AppProvider";
const App = () => {
  return (
    <div className={styles.mydiv}>
      <AppProvider>
        <Navbar />
        <ProductList />
      </AppProvider>
    </div>
  );
};

export default App;
