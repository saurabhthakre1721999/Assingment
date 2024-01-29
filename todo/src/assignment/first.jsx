import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Allproducts from "./home";
const First = () => {
  const [Products, SetProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then((data) => data.json())
      .then((data) => {
        console.log("main data", data);
        SetProducts(data);
      })
      .catch((err) => {
        console.log(" eror ", err);
      });
  }, []);
  const { productid } = useParams();
  return (
    <div>
      {" "}
      <h1> hellow everyone{Products.title}</h1>
      <img src={Products.image} alt="" />
    </div>
  );
};

export default First;
const img = styled.div`
  fontsize: red;
`;
