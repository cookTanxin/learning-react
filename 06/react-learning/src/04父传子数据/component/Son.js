import React, {Component} from "react";
// 组件参数校验
import PropTypes from 'prop-types'
class Son extends Component {
  render() {
    let {name,age,location} = this.props
    return (
      <div>
        <ul>
          <li>姓名:{name}</li>
          <li>年龄:{age}</li>
          <li>城市:{location}</li>
        </ul>
      </div>
    )
  }
}

// 组件校验
Son.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  location: PropTypes.string.isRequired
}

// 组件默认值
Son.defaultProps = {
  name: 'lisi'
}

export default Son
