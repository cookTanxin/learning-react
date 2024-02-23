import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default class My extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <ul>
            <li>姓名：张三</li>
            <li>金额：20000</li>
          </ul>
        ) : (
          <Redirect to="/login"></Redirect>
        )}
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            isLogin: false
        })
    },3000)
  }
}
