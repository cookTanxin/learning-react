import React, { Component } from 'react'
import { NavLink,Switch,Route } from "react-router-dom";
import Company from '../../pages/about/page/company'
import Boss from '../../pages/about/page/boss'
import Children from '../../pages/about/page/children'
export default class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <NavLink exact to="/about" activeClassName="nav-active">关于公司</NavLink>
        <NavLink to="/about/boss" activeClassName="nav-active">关于老板</NavLink>
        <NavLink to="/about/children" activeClassName="nav-active">关于子公司</NavLink>
        <Switch>
          <Route exact path="/about" component={Company}></Route>
          <Route path="/about/boss" component={Boss}></Route>
          <Route path="/about/children" component={Children}></Route>
        </Switch>
      </div>
    )
  }
}
