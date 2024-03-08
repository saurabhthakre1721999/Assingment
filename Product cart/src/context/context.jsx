import React, { createContext, useEffect, useState } from "react";
export const ContextApi = createContext();

const Providers = ContextApi.Provider;
const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, Setcart] = useState([]);

  console.log("products", products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return <Providers value={{ products, Setcart }}>{children}</Providers>;
};

export default Context;
