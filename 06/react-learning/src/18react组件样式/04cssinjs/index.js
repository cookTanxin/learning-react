import React, {Component} from 'react'
import LoginPage from "./views/login";
import IndexPage from "./views/index";
// 导入classnames 处理class 样式
import classNames from "classnames";

// styled-components 主题定制

import {ThemeProvider} from 'styled-components'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className={classNames('goo','bo',['shw',{'name':true}],null,false)}>css in js and class names</h1>
        <ThemeProvider theme={{color:'blue'}}>
          <IndexPage></IndexPage>
          <LoginPage></LoginPage>
        </ThemeProvider>
      </div>
    )
  }
}
