import { useEffect } from "react";

function useMounteds(comname) {
  useEffect(() => {
    console.log(`${comname}挂载成功`);
    return () => {
      console.log(`${comname}卸载成功`);
    };
  }, [comname]);
}

export default useMounteds;
