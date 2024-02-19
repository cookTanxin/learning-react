import axios from "axios";
import { ADD_AREA } from "./constant";
import { message } from "antd";
// 添加区域数据
export const add_area = (areadata) => {
  return {
    type: ADD_AREA,
    areadata,
  };
};

// 定义返回一个函数的action 异步使用redux
export const getAreaData = () => {
  return (dispatch) => {
    const areas = localStorage.getItem("taiwan");
    if (areas) {
      const area = JSON.parse(areas);
      // 派发action事件
      dispatch(add_area(area));
      message.info("有数据了");
      return;
    }
    axios
      .get("https://static.104.com.tw/category-tool/json/Area.json")
      .then((res) => {
        localStorage.setItem("taiwan", JSON.stringify(res.data));
        // 派发事件
        dispatch(add_area(res.data));
      });
  };
};
