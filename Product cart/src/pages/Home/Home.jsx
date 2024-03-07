import { useContext, useEffect } from "react";

import { ContextApi } from "../../context/context";

const Home = () => {
  const product = useContext(ContextApi);
  console.log("producthome", product);
  return <div></div>;
};
export default Home;
