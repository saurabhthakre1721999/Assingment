import { useContext } from "react";

import { ContextApi } from "../../context/context";
import Products from "../../componets/products";

const Home = () => {
  const { products } = useContext(ContextApi);
  console.log("producthome", products);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",

        width: "100vw",
      }}
      className="raja"
    >
      {products.map((items) => {
        return <Products key={items.id} products={items} />;
      })}
    </div>
  );
};
export default Home;
