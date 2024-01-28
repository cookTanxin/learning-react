import React,{Component} from 'react'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1>setState是异步的</h1>
        <span>{this.state.count}</span>
        <button onClick={e => this.onChangeNumer()}>changeCountNumber</button>
      </div>
    )
  }
  // change count
  onChangeNumer () {
    // this.setState({
    //   count: this.state.count+1
    // },() => {
    //   console.log('change callback ===>')
    //   console.log(this.state.count)
    // })
    // console.log('sync====>')
    // console.log(this.state.count)
    // 在计时器中不是异步的 和原生dom 事件中
    setTimeout(() => {
      this.setState({
        count: this.state.count+1
      })
      console.log('我再计时器中========>')
      console.log(this.state.count)
    },0)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('数据发生变化')
    console.log('我在数据发生变化的生命周期')
    console.log(this.state.count)
  }
}
