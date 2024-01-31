import React,{Component,PureComponent} from 'react'



function heightOrderComponent (WrapperComponent) {
   class newComponent extends PureComponent {
    render() {
      return <WrapperComponent></WrapperComponent>
    }
  }
  newComponent.displayName = 'heightNewComponent'
  return newComponent
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>高阶组件定义方式</h1>
      </div>
    )
  }
}

export default heightOrderComponent(App)
