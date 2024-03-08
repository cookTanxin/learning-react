import React from "react";
import useLocalStorage from "../hook/useLocalStorage";
export default function Ccom() {
  const [data, setData] = useLocalStorage("name");
  const setNamelocalstorage = (randomNum) => {
    setData(randomNum);
  };
  return (
    <div>
      <p>c组件 本地存储数据</p>
      <h1>{data}</h1>
      <button onClick={(e) => setNamelocalstorage(Math.random().toFixed(2))}>
        存储数据
      </button>
    </div>
  );
}
