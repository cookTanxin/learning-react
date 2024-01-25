import react ,{Component} from 'react'

// 子组件

class SonChildren extends Component{
  render() {
    return (
      <div>
        <h3>子组件</h3>
        <button onClick={this.emitFather.bind(this)}>点击了子组件</button>
      </div>
    )
  }
  emitFather () {
    console.log('clickMessage');
    this.props.clickMessage()
  }
}
// 父组件
export default class App extends Component{
  // 正规写法!!!
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>子传父数据</h1>
        <SonChildren clickMessage={this.receiveSonMessage}></SonChildren>
      </div>
    )
  }
  // class6 filed 写法
  receiveSonMessage = ()=> {
    console.log('接收到子组件通知')
  }
}


