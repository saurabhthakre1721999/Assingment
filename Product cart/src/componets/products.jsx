import { useContext } from "react";
import { ContextApi } from "../context/context";

const Products = ({ products }) => {
  const { Setcart } = useContext(ContextApi);
  console.log(Setcart);
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        margin: "40px",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={products.image}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
      <button onClick={Setcart}>Add to cart</button>
    </div>
  );
};
export default Products;
