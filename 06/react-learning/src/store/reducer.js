// 导入模块 counter 和 area
import {areaReducer} from './area'
import {counterReducer} from './counter'




function reducer(state = {},action) {
    return {
        counterInfo:counterReducer(state.counterInfo,action),
        areaInfo: areaReducer(state.areaInfo,action)
    }
}
export default reducer