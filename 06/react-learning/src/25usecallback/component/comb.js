import React, { memo } from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "skyblue",
  color: "#fff",
  marginTop: "20px",
  textAlign: "center",
  lineHeight: "100px",
};

const Comb = memo(() => {
  console.log("组件B重新调用渲染了");
  return <div style={style}>comb</div>;
});

export default Comb;
