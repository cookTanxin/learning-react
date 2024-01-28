import React,{Component,PureComponent,memo} from 'react'




const MemoHeader = memo(function (props) {
  console.log('调用了 header')
  console.log(props)
  return (
    <h3>header 组件{props.count}</h3>
  )
})

class Main extends Component {
  render() {
    console.log('main 组件 render 被调用')
    return (
      <div>
        <Banner></Banner>
      </div>
    )
  }
}

class Footer extends PureComponent {
  render() {
    console.log('footer 组件 render 被调用')
    return (
      <h3>页脚区域</h3>
    )
  }
}

function Banner () {
  return (
    <div>banner 区域</div>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0,
      message:'hello world'
    }
  }
  render () {
    return (
      <div>
        <h1>组件嵌套</h1>
        <h1>计算:{this.state.count}</h1>
        <MemoHeader count={this.state.count}></MemoHeader>
        <Main></Main>
        <Footer></Footer>
        <button onClick={e => this.changeCount()}>改变count数据</button>
        <button onClick={e => this.changeText()}>改变text数据</button>
      </div>

    )
  }
  changeCount () {
    // 为什么每次setState 调用其他组件render 都会被调用? 有什么解决方案吗?
    // 有的 shouldComponentUpdate
    this.setState({
      count:this.state.count+1
    })
  }
  // 需求当我改变message 的时候 不去重新渲染 其他组件的 render 函数
  changeText () {
    this.setState({
      message:'你好 react'
    })
    console.log('改变了 message')
  }
}

export default App
