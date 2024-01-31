import React,{Component,PureComponent} from 'react'

// 需求是 计算两个不同的组件 加载的时间计算
class ComponentA extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData:[10,20,30]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.listData.map((item,index) => {
            return (
              <h1 key={index}>{item}</h1>
            )
          })
        }

      </div>
    )
  }
}

class ComponentB extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData:[10,20,30,88,99,55,66,55,66,55,44,55,44,22,33,55,66,44]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.listData.map((item, index) => {
            return (
              <h1 key={index}>{item}</h1>
            )
          })
        }

      </div>
    )
  }
}


// 如果两个组件都要使用 那么组件生命周期就会重复 可以使用一个高阶组件进行优化
function withComputedTime(WrapperComponent) {
  return class ComputedCom extends PureComponent {
    constructor(props) {
      super(props);
      // 渲染开始时间
      this.startTime = performance.now()
    }
    render() {
      return <WrapperComponent {...this.props}></WrapperComponent>
    }
    componentDidMount() {
      // 渲染结束时间
      let finishTime = performance.now()-this.startTime
      console.log(`${WrapperComponent.name}组件渲染时间：${finishTime.toFixed(2)}`)
    }
  }
}

let ComA = withComputedTime(ComponentA)
let ComB = withComputedTime(ComponentB)

class App extends Component {
  render() {
    return(
      <div>
        <ComA></ComA>
        <hr/>
        <ComB></ComB>
      </div>
    )
  }
}

export default App
