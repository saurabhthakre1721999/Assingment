import { children, createContext, useEffect, useState } from "react";
export const ContextApi = createContext();
const Context = ({ children }) => {
  const [products, setProduct] = useState([]);
  console.log("products", products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return <ContextApi.Provider value={products}>{children}</ContextApi.Provider>;
};

export default Context;
