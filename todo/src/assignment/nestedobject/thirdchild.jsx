import React from "react";
import { useState } from "react";

const Items = ({ Tree }) => {
  console.log("Items", Tree);
  return (
    <>
      {Tree.map((child) => (
        <div>{child.name}</div>
      ))}
    </>
  );
};
export default Items;
