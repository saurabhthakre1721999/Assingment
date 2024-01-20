import React, { useEffect, useState } from "react";
const Api = () => {
  const [products, serproduct] = useState([]);
  const [show, setshow] = useState("");

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
        <input type="text" name="" id="" />(
        <ul>
          {products.map((value) => {
            return <li> {products.name}</li>;
          })}
        </ul>
        )
      </div>
    </>
  );
};
export default Api;
