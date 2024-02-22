import React, { Component } from 'react'
import {HashRouter,BrowserRouter,Link,Route,Routes} from 'react-router-dom'
// 导入页面组件
import Home from '../pages/home'
import About from '../pages/about'
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Link to='/home'>首页</Link>
            <Link to='/about'>关于我们</Link>

            {/* Router 用于路径匹配 渲染对应的组件 */}
            <Routes>
                <Route exact  path='/home' element={<Home></Home>}></Route>
                <Route exact  path='/about' element={<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
