// reducer 是纯函数 不能有副作用
// 导入处理常量
import { ADD_NUM } from "./constant";

// counter 默认数据
const counterDefault = {
    globalConter:0
}

function counterReducer (state = counterDefault,action) {
    switch(action.type) {
        case ADD_NUM:
            return {...state,globalConter:state.globalConter+action.num}
        default:
            return state
    }
}

export default counterReducer