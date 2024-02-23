import React, { PureComponent } from 'react'
import {NavLink} from 'react-router-dom'
export default class Product extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            productList:[
                {id:0,name:'iphone'},
                {id:1,name:'xiaomi'},
                {id:2,name:'oppo'}
            ]
        }
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.productList.map((item,index) => {
                    return (
                        <li key={index}>
                          <NavLink to={{
                            pathname:'/product/productDetail/'+item.id,
                            query:{name:'product',ids:item.id},
                            state:{formData:true},
                            search:'?keys=chengdu&name=wenfu'
                          }}>{item.name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
  goDetial(item) {
    // this.props.history.push(`/product/productDetail/${item.id}`)
    this.props.history.push({
      pathname:'/product/productDetail/'+item.id,
      search: '?param1=value1&param2=value2',
      state: { // 可以传递不可见状态对象，不会体现在URL中
        fromDashboard: true,
        someData: 'any kind of data'
      }
    })
  }
}
