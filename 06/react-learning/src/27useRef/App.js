import React, { useEffect, useRef, useState } from "react";

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "childrenState",
    };
  }
  render() {
    return (
      <div>
        <p>子组件</p>
        <button onClick={(e) => this.changeStatechildren()}>改变</button>
      </div>
    );
  }
  showChildrenState() {
    console.log("子组件调用," + this.state.title);
  }
  changeStatechildren() {
    this.setState({
      title: "hahah",
    });
  }
}

export default function App() {
  const [count, setcount] = useState(0);
  const styleCom = {
    margin: "13px",
  };
  // 获取子组件实例
  const sonRef = useRef();
  // 获取dom元素
  const inputRef = useRef();

  //使用ref保存上一次的值
  const countRef = useRef(count);

  useEffect(() => {
    console.log(sonRef.current);
  }, [sonRef]);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  // 显示子组件 数据
  const showChilrenData = () => {
    sonRef.current.showChildrenState();
    console.log("显示dom");
    inputRef.current.focus();
  };

  return (
    <div style={styleCom}>
      <h1>useRef</h1>
      <h2>1.引入DOM(或者组件，但是需要是class组件 获取组件实例)元素;</h2>
      <hr />
      <p>访问子组件方法属性和方法</p>
      <Son ref={sonRef}></Son>
      <button onClick={showChilrenData}>获取子组件方法</button>
      <hr />
      <p>获取dom元素</p>
      <input ref={inputRef} type="text" placeholder="show password" />
      <hr />
      <p>保存一个数据，这个对象在整个生命周期中可以保存不变；</p>
      <p>上次：{countRef.current}</p>
      <p>本次：{count}</p>
      <button onClick={(e) => setcount(count + 10)}>改变count</button>
    </div>
  );
}
