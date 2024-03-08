import { createContext } from "react";

const usercontext = createContext({
  name: "张三",
  age: 28,
});

export default usercontext;
