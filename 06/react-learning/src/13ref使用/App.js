import React, {Component, PureComponent} from 'react'


class Counter extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={e => this.addCount()}>+1</button>
      </div>
    )
  }
  addCount() {
    this.setState({
      count: this.state.count+1
    })
  }
}

export default class App extends Component{
  constructor(props) {
    super(props);
    // 方式二传入一个对象
    this.buttonDom = React.createRef()
    // 方式三传入一个函数
    this.buttonThreeDom = null
    // 组件实例方法
    this.counterCom = React.createRef()
    // 函数组件无法获取ref 因为没有实例! 稍后老师会讲解高阶组件 那个时候学习
  }
  render() {
    return (
      <div>
        <h1>使用ref</h1>
        <h1>方式一 使用ref 传入字符串</h1>
        <button ref='buttondom'>hello react</button>
        <h1>方式二：传入一个对象</h1>
        <button ref={this.buttonDom}>hello react get refs</button>
        <h1>方式三: </h1>
        <button ref={el => this.buttonThreeDom = el}>hello react fun get dom</button>
        <h1>组件获取</h1>
        <button onClick={e => this.getComponentCount()}>获取组件ref</button>
        <hr/>
        <Counter ref={this.counterCom}></Counter>
      </div>
    )
  }
  componentDidMount() {
    console.log('方式一')
    console.log(this.refs.buttondom)
    console.log('方式二')
    console.log(this.buttonDom.current)
    console.log('方式三')
    console.log(this.buttonThreeDom)
  }
  // 获取组件的实例方法
  getComponentCount() {
    console.log(this.counterCom)
    this.counterCom.current.addCount()
    console.log(this.counterCom.current.state)
  }
}
