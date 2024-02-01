import React, {Component, PureComponent} from 'react'
import ReactDOM from 'react-dom'
// 定义一个model 组件
class Model extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("model")
    )
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow:false
    }
  }
  render() {
    return (
      <div>
        <h1>portals 使用</h1>
        <button onClick={e => this.showModel()}>显示</button>
        {
          this.state.isShow &&
          <Model>
            <div className='model-container'>
              <div className='inner-content'>
                <div className='closeIcon' onClick={e => this.closeModel(e)}></div>
              </div>
            </div>
          </Model>
        }

      </div>
    )
  }
  showModel () {
    this.setState({
      isShow:true
    })
  }
  closeModel(e) {
    console.log(e.target)
    this.setState({
      isShow: false
    })
  }
}

