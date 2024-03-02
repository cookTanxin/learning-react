import React, { memo } from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "blue",
  color: "#fff",
  marginTop: "20px",
  textAlign: "center",
  lineHeight: "100px",
};

const Coma = memo(() => {
  console.log("组件A重新调用渲染了");
  return <div style={style}>coma</div>;
});

export default Coma;
