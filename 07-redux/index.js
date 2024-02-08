// 导入redux
import {createStore} from 'redux'

// 初始化一个数据
const initState = {
    count:0
}



// reducer 纯函数
function reducer (state = initState,action) {
    switch(action.type){
        case 'ADD':
            return {...state,count:state.count+2}
        case 'REDUCE':
            return {...state,count:state.count-1}
        default:
            return state
    }
}


const store = createStore(reducer)

// 订阅消息

store.subscribe(() => {
    console.log('state发生变化===>')
    console.log(store.getState().count)
    console.log('state发生变化===>')
})


// 定义一些方法
const actionAdd = {type:'ADD'}
const actionReduce = {type:'REDUCE'}

// 派发 dispatch 修改全局数据
store.dispatch(actionAdd)
store.dispatch(actionReduce)

