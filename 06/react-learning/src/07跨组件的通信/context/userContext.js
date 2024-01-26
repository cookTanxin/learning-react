import React from 'react'
// 第一步创建一个需要共享的对象
const useUserContext = React.createContext({
  userName:'静子',
  userGender:'female'
})

export default useUserContext
