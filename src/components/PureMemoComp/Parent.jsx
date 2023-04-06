import React, { Component } from "react";
import RegComp from "./PureComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class Parent extends Component {
  state = {
    name: "Abolfazl",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Abolfazl" });
    }, 1000);
  }
  render() {
    console.log("Parent");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
