import React, { Component } from "react";
import useUserTheme from "../userTheme";

class Comb extends Component {
  render() {
    return <div>{this.context.color}</div>;
  }
}

// 设置上下文 contextType
Comb.contextType = useUserTheme;

export default Comb;
