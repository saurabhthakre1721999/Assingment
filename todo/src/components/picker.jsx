import React from "react";
import Input from "./input";
import { useState } from "react";
import styled from "styled-components";

const Picker = ({ filter }) => {
  const [Image, SetImage] = useState("");
  const img = Image ? URL.createObjectURL(Image) : null;

  return (
    <Uploder>
      {Image ? (
        <span style={{}}>
          {Image && <Photo src={img} alt="" style={{ filter: filter }} />}
        </span>
      ) : (
        <span>
          <Input SetImage={SetImage} />
          <h1>Uplod Image </h1>
        </span>
      )}
    </Uploder>
  );
};
export default Picker;
const Photo = styled.img`
  width: 500px;
  height: 400px;
  filter: ${(props) => props.style.filter || "none"};
`;
const Uploder = styled.div`
  display: flex;
  position: absolute;

  pading: 0px;
  right: 45vw;
  top: 10%;
`;
