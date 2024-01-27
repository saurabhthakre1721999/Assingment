import React from "react";
import styled from "styled-components";
import uplod from "./uplod.png";
import { useRef } from "react";
const Input = ({ SetImage }) => {
  const oninputchange = (e) => {
    if (e.target.files.length > 0) {
      SetImage(e.target.files[0]);
    }
  };
  const inputref = useRef();
  const imageclick = (event) => {
    inputref.current.click();
  };
  return (
    <Uplodfile>
      <Img src={uplod} onClick={imageclick} />
      <Inputag
        type="file"
        accept="image/*"
        name=""
        id=""
        ref={inputref}
        onChange={oninputchange}
      />
    </Uplodfile>
  );
};
export default Input;
const Uplodfile = styled.div`
  width: 200px;
  height: 200px;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const Inputag = styled.input`
  display: none;
`;
