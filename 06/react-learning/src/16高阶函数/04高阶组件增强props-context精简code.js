import React,{Component,PureComponent} from 'react'

// 定义一个共享数据
const userInfoContext = React.createContext({
  city:'chengdu',
  age: 18
})

// 定义一个高阶函数
function heightOrderContext (WrapperComponent) {
  return props => {
    return (
      <userInfoContext.Consumer>
        {
          user => {
            return (
              <WrapperComponent {...props} {...user}></WrapperComponent>
            )
          }
        }
      </userInfoContext.Consumer>
    )
  }
}

// 组件A
class ComponentA extends PureComponent {
  render() {
    return (
      <div>
        <p>我是组件A</p>
        <ul>
          <li>城市:{this.props.city}</li>
          <li>年龄:{this.props.age}</li>
        </ul>
      </div>
    )
  }
}

class ComponentB extends PureComponent {
  render() {
    return (
      <div>
        <p>我是组件B</p>
        <ul>
          <li>城市:{this.props.city}</li>
          <li>年龄:{this.props.age}</li>
        </ul>
      </div>
    )
  }
}

// 高阶组件复用
const EnhanceComponentA = heightOrderContext(ComponentA)
const EnhanceComponentB = heightOrderContext(ComponentB)

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city:'honouring',
      age:22
    }
  }

  render() {
    return (
      <div>
        <h1>高阶组件改进</h1>
        <h2>共享组件数据</h2>
        <userInfoContext.Provider value={{...this.state}}>
          <EnhanceComponentA></EnhanceComponentA>
          <EnhanceComponentB></EnhanceComponentB>
        </userInfoContext.Provider>
      </div>
    )
  }
}
