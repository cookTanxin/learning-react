import React, {Component, PureComponent} from 'react'
// style
import indexStyle from './index.module.scss'
// 导入首页样式
export default class IndexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieList: ['hello','close','apples'],
      currentActive:0
    }
  }
  render() {
    // good code
    const indexPageClass = `${indexStyle.indexpage} ${indexStyle.commonPage}`
    return (
      <div className={indexPageClass}>
        <h2>首页页面</h2>
        <ul>
          {
            this.state.movieList.map((item,index) => {
              return (
                <li
                  key={index}
                  className={(index === this.state.currentActive?indexStyle.active:'') + ' ' + indexStyle.listItem}
                  onClick={e => this.changeTab(index)}
                >{item}</li>
              )
            })
          }

        </ul>
      </div>
    )
  }
  changeTab = (index) => {
    this.setState({
      currentActive:index
    })
  }
}
