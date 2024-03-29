// 导入react
import React from "react";
// 导入react-dom
import reactDOM from "react-dom";
import "./style/index.scss";

import "antd/dist/antd.less";

import "bootstrap/dist/css/bootstrap.min.css";
// css module
// import './20react动画/alertCom.module.scss'
// app
import App from "./29customHook/App";

import { BrowserRouter } from "react-router-dom";

reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
