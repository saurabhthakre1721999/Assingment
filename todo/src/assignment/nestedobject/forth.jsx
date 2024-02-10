import { useState } from "react";

const Forthchild = ({ chil }) => {
  console.log(" forthchild", chil);
  return (
    <>
      {chil
        ? chil.map((child) => {
            return <div>{child.name}</div>;
          })
        : ""}
    </>
  );
};
export default Forthchild;
