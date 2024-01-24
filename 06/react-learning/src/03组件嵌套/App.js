import React,{Component} from 'react'


function Header() {
  return (
    <h3>header 组件</h3>
  )
}

class Main extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <h3>页脚区域</h3>
    )
  }
}

function Banner () {
  return (
    <div>banner 区域</div>
  )
}

class App extends Component {
  render () {
    return (
      <div>
        <h1>组件嵌套</h1>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>

    )
  }
}

export default App
