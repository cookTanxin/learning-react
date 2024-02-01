import React, {Component, PureComponent} from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontColor:'blue'
    }
  }
  render() {
    return (
      <div>
        <h1 style={{fontSize:'40px',color:this.state.fontColor}}>内联样式</h1>
      </div>
    )
  }
}
