import React from "react";
import { useState } from "react";
import Items from "./thirdchild";

const Children = ({ Tree }) => {
  const [Showchild, SetShowchild] = useState(false);

  console.log("secondchildren", Tree);
  return (
    <>
      {Tree.map((tree) => (
        <Items Tree={tree} />
      ))}
    </>
  );
};
export default Children;
