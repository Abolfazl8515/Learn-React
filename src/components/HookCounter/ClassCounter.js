import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    count: 0,
  };

  addOneHandler = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 1 };
    });
  };
  addTwoHandler = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 2 };
    });
  };
  addFiveHandler = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 5 };
    });
  };
  render() {
    return (
      <div>
        <h1>count is : {this.state.count}</h1>
        <button onClick={this.addOneHandler}>addOne</button>
        <button onClick={this.addTwoHandler}>addTwo</button>
        <button onClick={this.addFiveHandler}>addFive</button>
      </div>
    );
  }
}

export default ClassCounter;
