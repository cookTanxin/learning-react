import React, { Component } from "react";

// 如果是class组件要使用 那么需要先导入context
import { themeContext } from "../AppEffect";

console.log(themeContext);

class Classcom extends Component {
  //   static contextType = themeContext;
  // static contextType = themeContext; // 设置contextType
  render() {
    return <div>111</div>;
  }
}

Classcom.contextType = themeContext;

export default Classcom;
