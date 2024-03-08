import { useEffect, useState } from "react";

function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    return window.localStorage.getItem(key) || "";
  });
  useEffect(() => {
    window.localStorage.setItem(key, data);
  }, [data, key]);

  return [data, setData];
}

export default useLocalStorage;
