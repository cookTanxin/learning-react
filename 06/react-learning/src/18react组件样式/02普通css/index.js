import React, {Component, PureComponent} from 'react'
// 登录界面
import LoginPage from "./views/loginPage";
import IndexPage from "./views/indexPage";
class App extends Component {
  render() {
    return (
      <div>
        <h1>普通css的应用</h1>
        {/*登录界面*/}
        <LoginPage></LoginPage>
        {/*首页组件*/}
        <IndexPage></IndexPage>
      </div>
    )
  }
}

export default App
