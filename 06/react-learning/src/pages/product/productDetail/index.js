import React, { PureComponent } from 'react'

function parseQueryString(queryString) {
  const queryParams = queryString.split('&');
  const result = {};

  queryParams.forEach(param => {
    const [key, value] = param.split('=');
    result[key] = decodeURIComponent(value); // 解码URI编码过的值
  });

  return result;
}

export default class ProductDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      productId:''
    }
  }
  render() {
    return (
      <div>{this.state.productId}</div>
    )
  }
  componentDidMount(){
    console.log(this.props.match);
    console.log(this.props.history)
    const searchObject = parseQueryString(this.props.location.search.substring(1));
    console.log(searchObject)
    console.log(this.props.location)
    console.log(this.props.match.params.id)
    this.setState({
      productId:this.props.match.params.id
    })
  }
}
