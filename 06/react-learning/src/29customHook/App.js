import React, { useState } from "react";

// acom
import Acom from "./component/acom";
import Bcom from "./component/bcom";
import Ccom from "./component/ccom";

// context
import usercontext from "./context/userContext";
import tokencontext from "./context/tokenContext";

export default function App() {
  const [show, setshow] = useState(true);
  return (
    <div style={{ margin: "15px", height: "3000px" }}>
      <h1>customHook</h1>
      <hr />
      {show && (
        <div>
          <usercontext.Provider value={{ name: "wenfu", age: 28 }}>
            <tokencontext.Provider value="token123">
              <Acom></Acom>
              <Bcom></Bcom>
              <Ccom></Ccom>
            </tokencontext.Provider>
          </usercontext.Provider>
        </div>
      )}
      <button onClick={(e) => setshow(!show)}>change</button>
      {/* 
      
      匿名函数 
      相当于传递了一个函数 但是未执行的函数
      
      */}
      {/* <button
        onClick={function () {
          setshow(!show);
        }}
      >
        change
      </button> */}
    </div>
  );
}
