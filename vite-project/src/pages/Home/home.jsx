import { Link } from "react-router-dom";

import React from "react";
const Home = () => {
  return (
    <>
      <h1> Home</h1>
      <Link to={"/order"}>
        <button>orders</button>
      </Link>
    </>
  );
};
export default Home;
