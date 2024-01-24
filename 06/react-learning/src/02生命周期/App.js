import react,{Component} from 'react'

class SonCom extends Component{
  render() {
    console.log('子组件 render')
    return(
      <h3>子组件</h3>
    )
  }
  // 组件销毁
  componentWillUnmount() {
    console.log('子组件调用了 组件销毁的钩子函数 componentWillUnmount')
  }
}

export default class App extends Component{
  constructor(props) {
    console.log('执行了 constructor 构造函数')
    super(props);
    this.state = {
      count:0,
      isShowSon: true
    }
    // bind 函数是 返回一个新的函数 !!!!
    // this.changeData = this.changeData.bind(this)
  }
  // 渲染函数
  render() {
    console.log('执行了 render函数')
    return (
      <div>
        <h1>生命周期</h1>
        <h2>当前:{this.state.count}</h2>
        <button onClick={e => this.changeData(e)}>更新数据</button>
        <hr/>
        {this.state.isShowSon && <SonCom></SonCom>}

      </div>
    )
  }
  // 改变数据
  changeData (e) {
    this.setState({
      count: this.state.count+=1,
      isShowSon: !this.state.isShowSon
    })
    console.log('事件对象',e.type)
  }
  // 组件挂载
  componentDidMount() {
    console.log('组件挂载 componentDidMount')
  }
  // 数据更新
  componentDidUpdate() {
    console.log('执行了 componentDidUpdate 数据更新函数')
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('更新之前 获取更新之前的数据')
    console.log(prevState)
    console.log('更新之前 获取更新之前的数据')
    return prevState
  }
}
