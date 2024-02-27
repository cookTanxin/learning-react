import React, { Component } from "react";
import { Route, NavLink,Switch,withRouter,Redirect } from "react-router-dom";
// 导入页面组件
import Home from "../pages/home";
import About from "../pages/about";
import NotePage from './404'
import My from './my'
import Login from './login'
import Product from '../pages/product'
import ProductDetail from '../pages/product/productDetail'
import {renderRoutes} from 'react-router-config'
// 导入路由配置
import routers from '../router/index'
import "./style/index.scss";
 class App extends Component {
  render() {
    return (
      <>
        <div className="nav-contntstyle">
          <NavLink to="/home" exact activeClassName="nav-active">
            首页
          </NavLink>
          <NavLink to="/about"   activeClassName="nav-active">
            关于我们
          </NavLink>
          <NavLink to='/my'  activeClassName='nav-active'>我的</NavLink>
          <NavLink to='/product'  activeClassName='nav-active'>商品</NavLink>
        </div>
        {/* Router 用于路径匹配 渲染对应的组件 */}
        {/* <Switch>
          <Route  path="/home" component={Home}></Route>
          <Route  path="/about" component={About}></Route>
          <Route path='/my' component={My}></Route>
          <Route path='/login' component={Login}></Route>
          <Route exact path='/product' component={Product}></Route>
          <Route path='/product/productDetail/:id' component={ProductDetail}></Route>
          <Route path='*' component={NotePage}></Route>
        </Switch> */}

        {/* 使用react-router-config */}
        {renderRoutes(routers)}
        
      </>
    );
  }
  componentDidMount(){
    console.log(this.props.match)
    if(this.props.history.location.pathname === '/') {
      this.props.history.replace('/home')
    } 
  }
}


export default withRouter(App)