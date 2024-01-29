import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Allproducts = () => {
  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log("main data", data);
        SetProducts(data);
      })
      .catch((err) => {
        console.log(" eror ", err);
      });
  }, []);
  //-----------------------------------------------oclick input bar---------------------------------------------

  return (
    <div style={{ display: "flex", flexWrap: "wrap", background: "" }}>
      {Products.map((Product) => {
        return (
          <Link
            to={`/detail/${Product.id}`}
            key={Product.id}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid black",
                display: "flex",
                height: "200px",
                width: "150px",
                flexWrap: "wrap",
                marginBottom: "10px",
                gap: "10px",
                marginLeft: "10px",
                boxShadow: "3px 5px 7px black",
                justifyContent: "center",
                alignContent: "",
              }}
              key={Product.id}
            >
              <img
                src={Product.image}
                alt=""
                style={{ width: "100px", height: "100px", padding: "0px" }}
                key={Product.id}
              />
              <span
                style={{
                  height: "20px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  marginLeft: "20px",
                  textOverflow: "ellipsis",
                }}
                key={Product.id}
              >
                {Product.title}
              </span>

              <p key={Product.id}> ₹ {Product.price}</p>
            </div>{" "}
          </Link>
        );
      })}
    </div>
  );
};
export default Allproducts;
