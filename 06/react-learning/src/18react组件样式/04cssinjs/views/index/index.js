import React, { PureComponent} from 'react'

import styled from "styled-components";
// 可以使用嵌套 类似scss
const IndexWrapper = styled.div`
    color: orange;

    .title {
        font-weight: lighter;
    }

    ul {
        li {
            &:nth-child(2) {
                color: blue;
            }

            &:hover {
                font-weight: bold;
            }
        }
    }
`
// 导入首页样式
export default class IndexPage extends PureComponent {

  render() {
    return (
      <IndexWrapper>
        <h2 className='title'>首页页面</h2>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </IndexWrapper>

    )
  }
}
