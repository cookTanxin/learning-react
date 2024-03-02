import React, { useState } from "react";

// 定义多个变量和复杂变量（数组、对象）：

export default function App() {
  const [counter, setCounter] = useState(0);

  // 定义一个简单数据类型
  const [age, setage] = useState(28);
  // 定义一个数组类型
  const [user, setuser] = useState([
    { id: 1, name: "lisi", age: 18 },
    { id: 2, name: "zhangsan", age: 20 },
  ]);

  // 定义一个对象
  const [userInfo, setuserInfo] = useState({ age: 18, city: "chengdu" });

  function changeCity() {
    const userInfoData = { ...userInfo };
    userInfoData.city = "taiwan";
    setuserInfo(userInfoData);
  }

  // 增加年龄
  function addAge(index) {
    const userlist = [...user];
    userlist[index].age += 1;
    setuser(userlist);
  }

  return (
    <div>
      <p>数字{counter}</p>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
      <hr />
      <ul>
        <li>年龄：{age}</li>
      </ul>
      <ul>
        {user.map((item, index) => {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.age}</p>
              <button onClick={(e) => addAge(index)}>+1</button>
              {/* bad code */}
              {/* <button onClick={addAge(index)}>+1</button> */}
            </li>
          );
        })}
      </ul>
      <p>{userInfo.city}</p>
      {/* 改变用户城市 */}
      <button onClick={changeCity}>改变城市</button>
    </div>
  );
}
