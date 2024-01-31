import React,{Component,PureComponent} from 'react'


class LoginPage extends PureComponent{
  render() {
    return (
      <div>
        请登录
      </div>
    )
  }
}

class UserinfoPage extends Component {
  render() {
    return (
      <div>
        <p>用户名：张三</p>
      </div>
    )
  }
}

function withUser (WrapperComponent) {
  const AuthCom =  props => {
    let {isLogin} = props
    if(isLogin) {
      return <WrapperComponent {...props}></WrapperComponent>
    } else {
      return  <LoginPage></LoginPage>
    }
  }
  AuthCom.displayName = 'AuthCom'
  return AuthCom
}


const WithUSerLogin = withUser(UserinfoPage)

class App extends Component {
  render() {
    return (
      <div>
        <h1>利用高阶组件完成登录鉴权操作</h1>
        <WithUSerLogin isLogin={true}></WithUSerLogin>
      </div>
    )
  }
}


export default App
