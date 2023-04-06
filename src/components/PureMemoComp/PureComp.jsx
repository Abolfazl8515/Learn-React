import React, { PureComponent } from "react";

class RegComp extends PureComponent {
  render() {
    console.log("Pure Comp");
    return <div>Name is {this.props.name}</div>;
  }
}

export default RegComp;
