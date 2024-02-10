import React from "react";
import { TREE_DATA } from "./treedata";
import { useState } from "react";
import Children from "./secondchild";

const Froots = () => {
  return (
    <>
      {TREE_DATA.map((FrootsVegitable) => {
        return (
          <div>
            {FrootsVegitable.name}
            <Children children={FrootsVegitable.children} />
          </div>
        );
      })}
    </>
  );
};
export default Froots;
