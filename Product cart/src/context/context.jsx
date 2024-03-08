import React, { createContext, useEffect, useState } from "react";
export const ContextApi = createContext();

const Providers = ContextApi.Provider;
const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, Setcart] = useState([]);
  const [count, setCount] = useState(1);
  const AddtoCart = (products) => {
    if (cart.includes(products)) {
      return setCount(count + 1);
    } else Setcart([...cart, products]);
  };
  console.log("cart", cart);
  console.log("products", products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Providers value={{ products, AddtoCart, cart, count, setCount }}>
      {children}
    </Providers>
  );
};

export default Context;
