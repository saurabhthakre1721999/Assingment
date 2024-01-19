import React, { useEffect, useState } from "react";
const Api = () => {
  const [products, serproduct] = useState([]);

  useEffect(() => {
    fetch(" https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log("main data", data);
        serproduct(data);
      })
      .catch((err) => {
        console.log(" eror ", err);
      });
  }, []);

  console.log("products", products);
  return (
    <>
      {" "}
      <div>
        {" "}
        {products.map((pr) => (
          <li key={products.id}> {products[0].title} </li>
        ))}
        <h1>products {} </h1>
      </div>
    </>
  );
};
export default Api;
