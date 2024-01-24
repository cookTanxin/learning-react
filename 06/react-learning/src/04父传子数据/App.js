import React from "react";
// 子组件
import Son from "./component/Son";
// 函数式组件
import FunSon from "./component/FunSon";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'zhangsan',
      age: 28,
      location: 'chengdu'
    }
  }
  render() {
    return (
      <div>
        <h1>父传递子数据</h1>
        {/*类组件*/}
        <Son name={this.state.name}  age={this.state.age} location={this.state.location}></Son>
        {/*函数式组件 没有状态值*/}
        <FunSon  age={this.state.age} location={this.state.location}></FunSon>
      </div>
    )
  }
}

export default App
