import { useEffect, useState } from "react";
import { debounce } from "../utils/index";
function useScroll() {
  const [scrollTop, setscrollTop] = useState(0);
  useEffect(() => {
    const computedScrollHeight = debounce(
      function () {
        setscrollTop(window.scrollY);
      },
      800,
      true
    );
    // 监听页面滚动距离
    window.addEventListener("scroll", computedScrollHeight);
    return () => {
      window.removeEventListener("scroll", computedScrollHeight);
    };
  }, []);

  return [scrollTop];
}

export default useScroll;
