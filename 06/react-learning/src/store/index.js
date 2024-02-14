import {createStore} from 'redux'

// 导入reducer
import reducer from './reducer'

// 创建store
const store = createStore(reducer)

export default store