import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react";

// 函数组件
const Hyinput = forwardRef((props, ref) => {
  const [count, setcount] = useState(0);
  // ref
  const inputRef = useRef();
  const pRef = useRef();
  // 定义要暴露给父组件的方法
  useImperativeHandle(
    ref,
    () => ({
      fcus: () => {
        inputRef.current.focus();
        console.log("暴露的指定方法");
        pRef.current.innerHTML = "hahah";
      },
    }),
    []
  );
  return (
    <div>
      {/* <p>{count}</p> */}
      <input ref={inputRef} type="text" placeholder="请输入信息" />
      <p ref={pRef}></p>
    </div>
  );
});

export default function App() {
  const HyRef = useRef();
  useEffect(() => {
    console.log(HyRef);
  });
  const showChildrenMethods = () => {
    HyRef.current.fcus();
  };
  return (
    <div style={{ margin: "15px" }}>
      <h1>forwardRef</h1>
      <Hyinput ref={HyRef}></Hyinput>
      <button onClick={showChildrenMethods}>获取子组件指定方法</button>
    </div>
  );
}
