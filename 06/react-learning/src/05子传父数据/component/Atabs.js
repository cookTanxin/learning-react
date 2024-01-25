import {Component} from "react";
// 组件校验
import PropTypes from "prop-types";
class ATabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map(item => {
              return (
                <li
                  key={item.id}
                  className={['item-tab ',(item.id === this.props.active?'active':'')].join('')}
                  onClick={e => this.cliclItem(item)}
                >
                  {item.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  // 点击tab
  cliclItem (item) {
    this.props.changeActive(item)
  }
}

// 组件属性
ATabs.propTypes = {
  // tabs array
  list: PropTypes.array.isRequired,
  // active
  active: PropTypes.number
}

ATabs.defaultProps = {
  active: 1
}


export default ATabs
