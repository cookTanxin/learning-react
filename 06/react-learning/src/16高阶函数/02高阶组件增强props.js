import React,{Component,PureComponent} from 'react'

// header 组件
class Header extends PureComponent {
  render() {
    return (
      <div>
        <p>姓名:{this.props.name}</p>
        <p>年龄:{this.props.age}</p>
        {this.props.city && <p>城市:{this.props.city}</p>}
      </div>
    )
  }
}

// 使用一个高阶函数 增强 组件 因为你使用的是增强函数 不需要首字母大写 but 赋值成为一个组件 要大写哈
function enhanceProps (WrapperComponent,otherProps = {}) {
  return props => <WrapperComponent {...props} {...otherProps}></WrapperComponent>
}


const EnhanceHeader = enhanceProps(Header,{})

class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHeader name='李四' age='28'></EnhanceHeader>
      </div>
    )
  }
}

export  default  App
