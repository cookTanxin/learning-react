import { PureComponent } from "react";
// 导入store
import store from "../../store";
// 导入action事件 进行修改全局数据
import {add_num} from '../../store/actionCreators'
export default class About extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter:store.getState().globalConter
        }
    }
    render () {
        return (
            <div>
                <h3>组件one</h3>
                <p>{this.state.counter}</p>
                <button onClick={ e => this.addnumber()}>+1</button>
            </div>
        )
    }
    // 组件挂载生命周期
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            // 更新组件数据
            this.setState({
                counter:store.getState().globalConter
            })
        })
    }
    // 组件卸载
    componentWillUnmount() {
        // 在组件卸载时取消对Redux store的订阅
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
    // 全局添加数字
    addnumber () {
        // 派发一个全局数据
        store.dispatch(add_num(1))
    }
}