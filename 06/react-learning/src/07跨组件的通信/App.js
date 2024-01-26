import React,{Component} from 'react'
import MessageBox from "./component/MessageBox";


// 3. 导入上下文对象
import useUserContext from "./context/userContext";
// 导入共享的颜色上下文对象
import useUserTheme from "./context/userTheme";

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '苍井',
      userGender:'man',
      color:'black'
    }
  }
  render() {
    return (
      <div>
        <h1>跨组件的通信 -通过 非父子传递数据</h1>
        {/*provider 嵌套*/}
        <useUserContext.Provider value={{...this.state}}>
          {/*嵌套一个颜色共享数据*/}
          <useUserTheme.Provider value={{color: this.state.color}}>
            <MessageBox></MessageBox>
          </useUserTheme.Provider>
        </useUserContext.Provider>
        <hr/>
        <h3>change provider data</h3>
        <button onClick={this.changeUserData.bind(this)}>改变数据</button>
      </div>
    )
  }
  // 改变祖先数据 触发孙子组件的数据发生改变
  changeUserData() {
    console.log('修改孙子组件')
    this.setState({
      userName:'静静子',
      userGender:'female',
      color:'blue'
    })
  }
}
