import React, { useContext } from "react";
import useUserTheme from "../userTheme";
function Comc() {
  const theme = useContext(useUserTheme);
  return <div style={{ color: theme.color }}>函数式组件{theme.color}</div>;
}
export default Comc;
