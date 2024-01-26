import React,{Component} from 'react'
// 上下文对象
import useUserContext from "../context/userContext";
import useUserTheme from "../context/userTheme";
function MessageItemFun() {
  return (
    <div className='message-item'>
      {/*函数式组件 共享数据*/}
      {/*用户数据共享*/}
      <useUserContext.Consumer>
        {
          value => {
            {/*全局主题色数据共享*/}
            return (
              <useUserTheme.Consumer>
                {
                  theme => {
                    return (
                      <div className='message-item' style={{color: theme.color}}>
                        <div className='message-li'>用户:{value.userName}</div>
                        <div className='message-li'>性别:{value.userGender}</div>
                      </div>
                    )
                  }
                }
              </useUserTheme.Consumer>

            )
          }
        }
      </useUserContext.Consumer>

    </div>
  )
}

export default MessageItemFun
