// 组件校验
import PropTypes from 'prop-types'
function FunSon(props) {
  let {name,age,location} = props
  return (
    <div>
      <h1>子组件是函数式组件</h1>
      <ul>
        <li>姓名:{name}</li>
        <li>年龄:{age}</li>
        <li>城市:{location}</li>
      </ul>
    </div>
  )
}

// 属性值校验
FunSon.propTypes = {
  // 姓名字符串类型
  name: PropTypes.string,
  // 年龄 数字类型
  age: PropTypes.number,
  // 城市
  location: PropTypes.string.isRequired
}

// 组件属性默认值
FunSon.defaultProps = {
  name: '福子'
}

export default FunSon
