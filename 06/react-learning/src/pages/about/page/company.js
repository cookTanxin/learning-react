import React, { PureComponent } from 'react'

export default class Company extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={e => this.goBackHome()}>回到首页</button>
      </div>
    )
  }
  goBackHome() {
    this.props.history.push('/home')
    console.log(this.props.history);
    console.log(this.props.location)
    console.log(this.props.match)
  }
}
