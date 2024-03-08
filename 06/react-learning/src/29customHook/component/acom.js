import React from "react";
import useMounteds from "../hook/useMounted";
import useUser from "../hook/useUser";
import useScroll from "../hook/useScroll";
export default function Acom() {
  useMounteds("Acom");
  const [user] = useUser();
  const [scrollTop] = useScroll();
  return (
    <div>
      <p>Acom</p>
      <ul>
        <li>{user.name}</li>
        <li>滚动高度：{scrollTop}</li>
      </ul>
    </div>
  );
}
