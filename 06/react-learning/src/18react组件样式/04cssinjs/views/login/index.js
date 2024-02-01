import React, {Component, PureComponent} from 'react'
import styled from "styled-components";

const InputStyle = styled.input.attrs(props => ({
  // Every <PasswordInput /> should be type="password"
  type: "text",
  placeholder:props.$pname
}))`
  border: 1px solid red;
    outline: none;
    background-color: ${(props) => props.$bgColor};
    color: ${props => props.color};
`
// 导入首页样式
export default class LoginPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputType:'text'
    }
  }
  render() {
    return (
      <div>
        <h2>登录界面</h2>
        <button onClick={e => this.changeInputType()}>改变输入框类型</button>
        <form>

            <InputStyle $pname='请输入' $bgColor='red' color='yellow'></InputStyle>

          <input type="text"/>
        </form>


      </div>
    )
  }

  changeInputType() {
    this.setState({
      inputType: 'password'
    })
  }
}
