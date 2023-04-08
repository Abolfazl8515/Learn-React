import React, { Component } from "react";
import "./Navbar.module.css";
import { useProducts } from "../AppProvider";

const Navbar = () => {
  const products = useProducts();
  return (
    <header>
      <h1>this is App</h1>
      <span>{products.length}</span>
    </header>
  );
};

export default Navbar;
