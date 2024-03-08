import usercontext from "../context/userContext";
import { useContext } from "react";
function useUser() {
  const user = useContext(usercontext);
  return [user];
}
export default useUser;
