import React,{Component} from 'react'

// 导航组件
import Navheader from "./component/Navheader";





class App extends Component {
  render(){
    return (
      <div>
        <h3>实现react插槽功能</h3>
        {/*<Navheader>*/}
        {/*  <span>左侧</span>*/}
        {/*  <span>中心</span>*/}
        {/*  <span>右侧</span>*/}
        {/*</Navheader>*/}
        <Navheader leftelement={<span>1</span>} centerelement={<span>left</span>} rightelement={<span>left</span>}></Navheader>
      </div>
    )
  }
}

export default App
