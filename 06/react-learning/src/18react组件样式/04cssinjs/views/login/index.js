import React, {PureComponent} from 'react'
import styled from "styled-components";

const InputStyle = styled.input.attrs(props => ({
  // Every <PasswordInput /> should be type="password"
  type: "text",
  placeholder: props.$pname
}))`
    border: 1px solid red;
    outline: none;
    background-color: ${(props) => props.$bgColor};
    color: ${props => props.theme.color};
`

const LoginWrapperStyleDiv = styled.div`
    form {
        input {
            &:nth-child(2) {
                border: 1px solid pink;
            }
        }
    }

    .showCOntent {
        .show-item {
            font-size: 60px;
            color: ${props => props.theme.color};
        }
    }
`

const HyButton = styled.button`
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

const HyPrimaryButton = styled(HyButton)`
    background-color: skyblue;
`

const HyWarningButton = styled(HyButton)`
    background-color: indianred;
    color: #fff;
`

// 导入首页样式
export default class LoginPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputType: 'text'
    }
  }

  render() {
    return (
      <LoginWrapperStyleDiv>
        <h2>登录界面</h2>
        <button onClick={e => this.changeInputType()}>改变输入框类型</button>
        <form>
          <InputStyle $pname='请输入' $bgColor='red' color='yellow'></InputStyle>
          <input type="text"/>
        </form>
        <div className='showCOntent'>
          <div className='show-item'>1</div>
          <div className='show-item'>1</div>
        </div>
        <HyPrimaryButton onClick={e => this.clickPrimary()}>普通按钮</HyPrimaryButton>
        <HyWarningButton onClick={e => this.clickwarning()}>紧急按钮</HyWarningButton>
      </LoginWrapperStyleDiv>
    )
  }

  changeInputType() {
    this.setState({
      inputType: 'password'
    })
  }

  clickPrimary() {
    console.log('点击了普通按钮')
  }

  clickwarning() {
    console.log('点击了紧急按钮')
  }
}
