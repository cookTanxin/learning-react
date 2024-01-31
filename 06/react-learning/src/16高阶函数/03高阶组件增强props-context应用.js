import React,{Component,PureComponent} from 'react'


// 创建一个共享数据对象
const userInfoContext = React.createContext({
  city:'chengdu',
  age:18
})
// 组件A
class ComponentA extends PureComponent {
  render() {
    return (
      <userInfoContext.Consumer>
        {
          value => {
            return (
              <div>
                <p>我是组件A</p>
                <ul>
                  <li>城市:{value.city}</li>
                  <li>年龄:{value.age}</li>
                </ul>
              </div>
            )
          }
        }
      </userInfoContext.Consumer>

    )
  }
}

// ComponentA.contextType = userInfoContext

// 组件B
class ComponentB extends PureComponent {
  render() {
    return (
     <userInfoContext.Consumer>
       {
         value => {
           return (
             <div>
               <p>我是组件A</p>
               <ul>
                 <li>城市:{value.city}</li>
                 <li>年龄:{value.age}</li>
               </ul>
             </div>
           )
         }
       }
     </userInfoContext.Consumer>
    )
  }
}

// ComponentB.contextType = userInfoContext

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city:'beijing',
      age:28
    }
  }
  render() {
    return (
      <div>
        <h1>高阶函数 应用在context 兄弟组件传递数据</h1>
        <hr/>
        <userInfoContext.Provider value={{...this.state}}>
            <ComponentA></ComponentA>
            <ComponentB></ComponentB>
        </userInfoContext.Provider>
        <button onClick={e => this.changeData()}>改变数据</button>
      </div>
    )
  }
  changeData() {
    this.setState({
      city:'chengdu',
      age:14
    })
  }
}

export default App
