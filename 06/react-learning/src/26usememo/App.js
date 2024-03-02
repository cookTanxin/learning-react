import React, { useState, useMemo, memo } from "react";
import classname from "classnames";
import style from "./usememostyle.module.scss";

function caleNum(count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  console.log("计算一遍");
  return total;
}

const ShowCount = memo((props) => {
  console.log("showcount 组件渲染");
  return <div>{props.count}</div>;
});

const ShowInfo = memo((props) => {
  console.log("showinfo 组件渲染");
  return <div>{props.info.name}</div>;
});

export default function App() {
  const [count, setcount] = useState(0);
  const [show, setshow] = useState(true);
  // 切换盒子
  const changeBox = () => {
    setshow(!show);
  };

  //   bad code

  //   const total = caleNum(count);

  // 如果切换box 也会导致total 计算一遍，我们需要依赖count 进行计算 当count 改变才计算，优化性能

  const totalNum = useMemo(() => {
    return caleNum(count);
  }, [count]);

  // 增加count
  const addCountmethod = () => {
    setcount(count + 1);
  };

  // useMemo 也可以用于子组件优化
  // 简单数据类型 会比较值，只要值不变，那么就不会变化
  // 复杂数据类型 会比较值 如果没有变化 组件就不会重新渲染

  const info = useMemo(() => {
    if (count >= 10) {
      return { name: "zhangsan", age: "15" };
    } else {
      return { name: "wenfu", age: "16" };
    }
  }, [count]);

  return (
    <div style={{ margin: "16px" }}>
      <h1>useMemo</h1>
      <hr />
      <p>数字: {totalNum}</p>
      <button onClick={addCountmethod}>+1</button>
      <hr />
      {show && <div className={classname(style.box)}></div>}
      <button onClick={changeBox} className={classname(style.changebutton)}>
        change
      </button>
      <hr />
      <h1>组件</h1>
      <ShowCount count={count}></ShowCount>
      <ShowInfo info={info}></ShowInfo>
    </div>
  );
}
