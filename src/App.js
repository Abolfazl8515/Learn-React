import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import AppProvider from "./components/AppProvider";
import Filter from "./components/Filter/Filter";
const App = () => {
  return (
    <div className={styles.mydiv}>
      <AppProvider>
        <Navbar />
        <Filter />
        <ProductList />
      </AppProvider>
    </div>
  );
};

export default App;
