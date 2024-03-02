import React, { useCallback, useState } from "react";
import style from "./style.module.scss";
import classname from "classnames";
import Coma from "./component/coma";
import Comb from "./component/comb";
export default function App() {
  const [show, setshow] = useState(true);
  const [count, setcount] = useState(0);
  // 改变盒子的显示与隐藏
  const showboxChange = () => {
    setshow(!show);
  };
  // 传递给子组件的方法
  const addOne = () => {
    setcount(count + 1);
  };

  // 使用usecallback 优化性能 要等count 有改变 comB 才会重新渲染 觉得子组件是否要被重新渲染
  const addTwo = useCallback(
    function addcount() {
      setcount(count + 1);
    },
    [count]
  );
  return (
    <div style={{ margin: "18px" }}>
      <h1>usecallback</h1>
      <h2>{count}</h2>
      {show && <div className={classname(style.box)}></div>}
      <div className={classname(style.buttonarea)}>
        <button onClick={showboxChange}>show/hidden</button>
      </div>
      <button onClick={addOne}>coma</button>
      {/* <button>comb</button> */}
      {/* 组件a */}
      <Coma addcount={addOne}></Coma>
      <Comb addcount={addTwo}></Comb>
    </div>
  );
}
