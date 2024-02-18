import { createStore, applyMiddleware,compose } from "redux";

// 导入react-thunk 管理全局数据
import thunk from "redux-thunk";

// 导入reducer
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 通过applyMiddleware 来结合多个middleware 返回一个enhance
const enhancer = composeEnhancers(applyMiddleware(thunk));
// 创建store
const store = createStore(reducer, enhancer);

export default store;
