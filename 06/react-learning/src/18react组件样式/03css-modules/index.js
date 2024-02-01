import React, {Component, PureComponent} from 'react'
import LoginPage from "./views/login";
import IndexPage from "./views/index";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>css modules</h1>
        <IndexPage></IndexPage>
        <LoginPage></LoginPage>
      </div>
    )
  }
}
