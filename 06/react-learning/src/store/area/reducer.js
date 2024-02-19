import { ADD_AREA } from "./constant"

// counter store 模块默认值数据
const areaDefault = {
    areaData:[]
}

// 专属于area 的处理actions
function areaReducer(state = areaDefault,action) {
    switch(action.type) {
        case ADD_AREA:
            return {...state,areaData:[...action.areadata]}
        default:
            return state
    }
}

export default areaReducer