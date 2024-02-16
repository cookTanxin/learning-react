import { PureComponent } from "react";
// 导入store
// import store from "../../store";
// 导入action事件 进行修改全局数据
// 导入connect封装好的函数 返回一个组件
// import connect from "../../utils/connect";
import {connect} from 'react-redux'
import {add_num} from '../../store/actionCreators'
class About extends PureComponent {
    render () {
        return (
            <div>
                <h3>组件one</h3>
                <p>{this.props.globalConter}</p>
                <ul>
                    {
                        this.props.areaData.map((item,index) => {
                            return (
                                <li key={index}>{item.des}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={ e => this.props.addnumber()}>+1</button>
            </div>
        )
    }
}


// mapStateToProps：用于将state映射到一个对象中，对象中包含我们需要的属性；
const mapStateToProps = (state) => ({
    globalConter: state.globalConter,
    areaData:state.areaData
})

// mapDispatchToProps 用户将dispatch 映射到一个对象中，对象中包含在组件中可能操作的函数
const mapDispatchToProps = dispatch => ({
    addnumber() {
        dispatch(add_num(1))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(About)