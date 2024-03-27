import { createContext } from "react";
const authContext = createContext();
const Authcontext = (children) => {
  export const usonlog = () => {};
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};
export default Authcontext;
