import React, { useEffect } from "react";
import useUserTheme from "../userTheme";
export default function Coma(props) {
  useEffect(() => {
    console.log("调用了 组件A");
    return () => {
      console.log("dom被移除的回调");
    };
  });
  return (
    <div>
      <useUserTheme.Consumer>
        {(theme) => {
          return (
            <div
              style={{ color: theme.color, fontSize: theme.fontSize + "px" }}
            >
              组件a
            </div>
          );
        }}
      </useUserTheme.Consumer>
    </div>
  );
}
