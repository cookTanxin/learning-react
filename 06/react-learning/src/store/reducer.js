// 导入常量
import { ADD_AREA, ADD_NUM } from "./constant";

// 初始数据
const defaultState = {
  globalConter: 0,
  // 地址数据
  areaData: [],
};

// 对action 做一些处理
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUM:
      return { ...state, globalConter: state.globalConter + action.num };
    case ADD_AREA:
      return { ...state, areaData: [...action.areadata] };
    default:
      return state;
  }
}

export default reducer;
