import React, { Component } from "react";
import "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <h1>this is App</h1>
        <span>{this.props.totalItems}</span>
      </header>
    );
  }
}

export default Navbar;
