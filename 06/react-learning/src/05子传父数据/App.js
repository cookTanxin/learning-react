import react ,{Component} from 'react'
// tab component
import ATabs from "./component/Atabs";
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
    this.state = {
      tabListdata:[
        {id:1,name:'流行'},
        {id:2,name:'古典'},
        {id:3,name:'kpop'}
      ],
      // 默认选中
      active:1,

    }
  }
  render() {
    return (
      <div>
        <h1>子传父数据</h1>
        <SonChildren clickMessage={this.receiveSonMessage}></SonChildren>
        {/*tab component*/}
        <ATabs changeActive={this.changeActive} list={this.state.tabListdata} active={this.state.active}></ATabs>
        <div>
          <h1>{this.state.tabListdata[this.state.active-1].name}</h1>
        </div>
      </div>
    )
  }
  // class6 filed 写法
  receiveSonMessage = ()=> {
    console.log('接收到子组件通知')
  }
  // 改变active 数据 class es6
  changeActive = (item) => {
    this.setState({
      active:item.id
    })
  }
}


