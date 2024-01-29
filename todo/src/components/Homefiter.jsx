import React, { useEffect } from "react";
import Input from "./input";
import { useState } from "react";
import styled from "styled-components";
import Picker from "./picker";
import Filter from "./filter";

const Home = () => {
  const [filters, Setfilters] = useState("");
  const onfilterchange = (e) => {
    Setfilters(e.target.value);
  };
  useEffect(() => {
    console.log("filters1", filters);
  }, [filters]);
  return (
    <Main>
      {" "}
      <Picker filter={filters} />
      <span style={{ width: "25%" }}>
        <Filter onchangefilter={onfilterchange} />
      </span>
    </Main>
  );
};
export default Home;
const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  flex-direction: row-reverse;
`;
