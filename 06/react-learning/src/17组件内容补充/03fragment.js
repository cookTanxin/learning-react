import React, {Component, Fragment, PureComponent,StrictMode} from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>header</h1>
      </div>
    )
  }
  // UNSAFE_componentWillMount() {
  //   console.log('init mount')
  // }
}


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData:[1,2,3,4,5,6]
    }
  }
  render() {
    return (
      <>
        <StrictMode>
          <Header></Header>
        </StrictMode>

        {/*<h1>fragment</h1>*/}
        <Fragment>
          {
            this.state.listData.map((item,index) => {
              return (
                <Fragment key={index}>
                  <h5>11</h5>
                </Fragment>
              )
            })
          }

        </Fragment>
      </>
    )
  }
}

export default App
