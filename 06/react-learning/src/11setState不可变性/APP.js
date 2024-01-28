import React, {Component, PureComponent} from 'react'

export default class APP extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {id:0,username:'张三',age:18},
        {id:1,username:'李四',age:20},
        {id:2,username:'王五',age:22}
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>setState 不可变性</h1>
        <ul>
          {this.state.userList.map((item,index) => {
            return (
              <li key={item.id}>{item.username}</li>
            )
          })}
        </ul>
        <button onClick={e => this.addUser()}>添加新人</button>
      </div>
    )
  }
  // 数据不可变性
  addUser() {
    let user = {id:this.state.userList.length,username:'赵五',age:28}
    // 类似浅拷贝
    let userList = [...this.state.userList]
    // 追加数据
    userList.push(user)
    // bad code 如果直接这样 因为是复杂数据类型 引用的地址是同一份 所以 如果使用pureComponent 就无法更新render 函数了
    // this.state.userList.push(user)
    // 更新ui数据
    this.setState({
      userList
    })
  }
}
