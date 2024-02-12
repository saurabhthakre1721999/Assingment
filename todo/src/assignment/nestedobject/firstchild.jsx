import React from "react";
import { TREE_DATA } from "./treedata";

import Children from "./secondchild";

const Froots = () => {
  const OnClickShow = () => {
    SetShowchild((pre) => !pre);
  };

  const TREE = [
    {
      name: "Fruit",
      children: [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Fruit loops" },
      ],
    },
    {
      name: "Vegetables",
      children: [
        {
          name: "Green",
          children: [{ name: "Broccoli" }, { name: "Brussels sprouts" }],
        },
        {
          name: "Orange",
          children: [{ name: "Pumpkins" }, { name: "Carrots" }],
        },
      ],
    },
  ];

  return (
    <>
      <Children Tree={TREE} />
    </>
  );
};
export default Froots;
