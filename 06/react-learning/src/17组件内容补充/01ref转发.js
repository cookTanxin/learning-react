import React, {Component, PureComponent, forwardRef, createRef} from 'react'


// 函数组件 无法获取 ref 那么 我们需要使用forward

// function HeaderCom(props) {
//   const clockHone = () => {
//     console.log('点击额')
//   }
//   return (
//     <div>
//       <h1 onClick={clockHone}>我是页头区域-{props.name}</h1>
//     </div>
//   )
// }

const HeaderCom = forwardRef(function (props,ref) {
  const clockHone = () => {
    console.log('点击额')
  }
  return (
    <div>
      <h1 ref={ref} onClick={clockHone}>我是页头区域-{props.name}</h1>
    </div>
  )
})



export default class App extends Component {
  constructor(props) {
    super(props);
    this.headerRef = createRef()
  }
  render() {
    return (
      <div>
        <h1>ref转发</h1>
        <HeaderCom name='hello' ref={this.headerRef}></HeaderCom>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.headerRef.current)
  }
}
