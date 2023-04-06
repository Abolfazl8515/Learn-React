import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg Comp");
    return <div>Name is {this.props.name}</div>;
  }
}

export default RegComp;
