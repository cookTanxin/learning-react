
// 导入常量
import {ADD_NUM} from './constant'

// 初始数据
const defaultState = {
    globalConter:0
}

// 对action 做一些处理
function reducer(state = defaultState,action) {
    switch(action.type) {
        case ADD_NUM:
            return {...state,globalConter: state.globalConter+action.num}
        default :
            return state
    }
}

export default reducer
