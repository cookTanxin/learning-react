import React,{Component} from 'react'
import useUserContext from "../context/userContext";




 class MessageItem extends Component {
  render() {
    console.log('class item component')
    return (
      <div className='message-item' style={{color:this.context.color}}>
        <div className='message-li'>用户: {this.context.userName}</div>
        <div className='message-li'>性别: {this.context.userGender}</div>
      </div>
    )
  }
}

// 2. 挂载上下文对象

MessageItem.contextType = useUserContext

export default MessageItem
