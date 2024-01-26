import React,{Component} from 'react'

// 第一种方法使用children 访问props 中的数据
// export default class Navheader extends Component{
//   render() {
//     return (
//       <div className='nav-content'>
//         <div className='nav-left nav-item'>
//           {this.props.children[0]}
//         </div>
//         <div className='nav-center nav-item'>
//           {this.props.children[1]}
//         </div>
//         <div className='nav-right nav-item'>
//           {this.props.children[2]}
//         </div>
//       </div>
//     )
//   }
// }

// 第二种使用props传递参数
// export default class Navheader extends Component{
//   render() {
//     let {leftelement,centerelement,rightelement} = this.props
//     return (
//       <div className='nav-content'>
//         <div className='nav-left nav-item'>
//           {leftelement}
//         </div>
//         <div className='nav-center nav-item'>
//           {centerelement}
//         </div>
//         <div className='nav-right nav-item'>
//           {rightelement}
//         </div>
//       </div>
//     )
//   }
// }

export default function Navheader(props){
  return (
    <div className='nav-content'>
      <div className='nav-left nav-item'>
        {props.leftelement}
      </div>
      <div className='nav-center nav-item'>
        {props.centerelement}
      </div>
      <div className='nav-right nav-item'>
        {props.rightelement}
      </div>
    </div>
  )
}
