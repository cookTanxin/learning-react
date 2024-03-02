import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h1>使用class组件完成案例</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={(e) => this.changeCounter()}>添加数据</button>
      </div>
    );
  }
  // 改变数字
  changeCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  // 生命周期函数
  componentDidMount() {
    document.title = this.state.counter;
  }
  // 当数据发生改变的生命周期函数
  componentDidUpdate() {
    document.title = this.state.counter;
  }
}
