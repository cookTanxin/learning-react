import React from 'react'

// 创建一个共享的context 上下文对象
const useUserTheme = React.createContext({
  color:'orange'
})


export default useUserTheme
