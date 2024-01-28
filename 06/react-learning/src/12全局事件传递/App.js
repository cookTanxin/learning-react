import React, {Component, PureComponent} from 'react'
// 引入events
import {EventEmitter} from "events";

// 事件总线
const eventBus = new EventEmitter()
// component A
class MessageA extends PureComponent{
  render() {
    return (
      <div>
        <button>组件A</button>
      </div>
    )
  }

  // 组件挂载完毕
  componentDidMount() {
    // 订阅消息
    eventBus.on('messageReceive',this.onReceiveMessage.bind(this))
  }
  // receive 接收消息
  onReceiveMessage(data,city){
    console.log('接收到其他组件发过来的消息了')
    console.log(data)
    console.log(city)
    this.props.destoryComponen()
  }
  componentWillUnmount() {
    console.log('***')
    eventBus.removeListener('messageReceive',this.onReceiveMessage)
    console.log('*******')
  }
}

// component B
class MessageB extends PureComponent{
  render() {
    return (
      <div>
        <button onClick={e => this.emitMessage()}>组件B</button>
      </div>
    )
  }
  emitMessage () {
    eventBus.emit('messageReceive',{name:'成都',money:'100000'},{'city':'chengdu'})
  }
}


export default class App extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      showA: true
    }
  }
  render() {
    return (
      <div>
        <h1>全局事件传递</h1>
        {
          this.state.showA && <MessageA destoryComponen={e => this.destoryComponen()}></MessageA>
        }

        <MessageB></MessageB>
      </div>
    )
  }
  // 销毁messageA组件
  destoryComponen(){
    console.log('我要销毁 destory')
    setTimeout(() => {
      this.setState({
        showA:false
      })
    },2000)
  }
}
