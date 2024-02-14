import {ADD_NUM} from './constant'

// 全局加法
export const add_num = (num) => {
    return {
        type:ADD_NUM,
        num
    }
}