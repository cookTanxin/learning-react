import React, { Component } from "react";

import useUserTheme from "./userTheme";
import Coma from "./component/coma";
import Comb from "./component/comb";
import Comc from "./component/comc";

// component

// 类组件
// import Classcom from "./component/classcom";

export default class AppEffect extends Component {
  render() {
    return (
      <div>
        <useUserTheme.Provider value={{ color: "red" }}>
          <Coma></Coma>
          <Comb></Comb>
          <Comc></Comc>
        </useUserTheme.Provider>
      </div>
    );
  }
}

// export default function AppEffect() {
//   const [counter, setCounter] = useState(0);
//   const [show, setshow] = useState(false);
//   // 改变数据
//   const changeCounter = () => {
//     setCounter(counter + 1);
//   };

//   // 切换组件
//   const changeShowcomponent = () => {
//     setshow(!show);
//   };

//   // 使用useeffect
//   useEffect(() => {
//     console.log("计数了");
//     document.title = `当前计数-${counter}`;
//   }, [counter]);

//   useEffect(() => {
//     console.log("首show变量的监听变化");
//   }, [show]);

//   // 不依赖任何内容 我们可以传递一个 空数组
//   useEffect(() => {
//     console.log("订阅消息");
//     return () => {
//       console.log("取消订阅");
//     };
//   }, []);
//   //   useEffect(() => {
//   //     console.log("网络请求");
//   //   });

//   //   // 事件监听
//   //   useEffect(() => {
//   //     console.log("事件监听");
//   //     return () => {
//   //       console.log("取消事件监听");
//   //     };
//   //   });
//   // useeffect 可以多次调用
//   //   useEffect(() => {
//   //     // 数据更新都会调用 这个 effect
//   //     console.log("5");
//   //   });

//   return (
//     <div>
//       <h1>使用react useeffect 完成刚才class组件的功能</h1>
//       <h2>{counter}</h2>
//       <button onClick={changeCounter}>changeCounter</button>
//       <hr />
//       <h1>组件 模拟组件销毁 生命周期函数</h1>
//       <button onClick={changeShowcomponent}>切换组件</button>
//       <themeContext.Provider value={{ color: "orange", fontSize: "100" }}>
//         {/* {show ? <Coma></Coma> : <Comb></Comb>} */}
//         <Classcom></Classcom>
//       </themeContext.Provider>
//     </div>
//   );
// }
