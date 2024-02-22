// 导入模块 counter 和 area
import {areaReducer} from './area'
import {counterReducer} from './counter'
// 使用combincerReducer 合并多个reducer 模块
import {combineReducers} from 'redux'



// function reducer(state = {},action) {
//     return {
//         counterInfo:counterReducer(state.counterInfo,action),
//         areaInfo: areaReducer(state.areaInfo,action)
//     }
// }

const reducer = combineReducers({
    counterInfo:counterReducer,
    areaInfo:areaReducer
})
export default reducer