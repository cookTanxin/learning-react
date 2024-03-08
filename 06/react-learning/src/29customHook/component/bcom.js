import React from "react";
import useMounteds from "../hook/useMounted";
import useScroll from "../hook/useScroll";
export default function Bcom() {
  useMounteds("Bcom");
  const [scrollTop] = useScroll();
  return <div>Bcom{scrollTop}</div>;
}
