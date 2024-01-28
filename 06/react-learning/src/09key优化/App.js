import React,{Component} from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList:['药神','肖申克的救赎']
    }
  }
  render() {
    return (
      <div>
        <h1>优化key</h1>
        <ul>
          {
            this.state.movieList.map((item,index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
