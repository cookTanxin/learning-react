import React, {Component, PureComponent} from 'react'
import LoginPage from "./views/login";
import IndexPage from "./views/index";

// styled-components 主题定制

import {ThemeProvider} from 'styled-components'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>css in js</h1>
        <ThemeProvider theme={{color:'blue'}}>
          <IndexPage></IndexPage>
          <LoginPage></LoginPage>
        </ThemeProvider>
      </div>
    )
  }
}
