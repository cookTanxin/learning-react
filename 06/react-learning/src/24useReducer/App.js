import React, { useReducer } from "react";
import countReducer from "./stateRecuder/index";
export default function App() {
  const [state, dispatch] = useReducer(countReducer, { counter: 0 });

  // 添加数据
  const addCounter = () => {
    let num = state.counter + 10;
    dispatch({ type: "add", num });
  };

  return (
    <div>
      <p>usereducer 是 usestate 的一种替代品</p>
      <hr />
      <p>
        在某些场景 处理state 逻辑比较多的时候，可以使用usereducer 进行逻辑的拆分
      </p>
      <hr />
      <h1>{state.counter}</h1>
      <button onClick={addCounter}>+1</button>
    </div>
  );
}
