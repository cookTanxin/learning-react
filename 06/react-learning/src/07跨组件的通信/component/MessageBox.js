import React,{Component} from 'react'
import MessageItem from "./MessageItem";
import MessageItemFun from "./MessageItemFun";
export default class MessageBox extends Component {
  render() {
    return (
      <div className='message-box'>
        <h1 className='messagebox-title'>messagebox component</h1>
        <hr/>
        <h1 className='messagebox-title'>class 组件(带状态值)</h1>
        <MessageItem></MessageItem>
        <hr/>
        <h1 className='messagebox-title'>函数式组件(不带状态值)</h1>
        <MessageItemFun></MessageItemFun>
      </div>
    )
  }
}
