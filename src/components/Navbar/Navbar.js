import React, { Component } from "react";
import "./Navbar.module.css";

class Navbar extends Component {
  render() {
    const { totalItems } = this.props;
    return (
      <header>
        <h1>this is App</h1>
        <span>{totalItems}</span>
      </header>
    );
  }
}

export default Navbar;
