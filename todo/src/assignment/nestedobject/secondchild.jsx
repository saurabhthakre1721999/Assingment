import React from "react";
import { useState } from "react";
import Thirdchild from "./thirdchild";
const Children = ({ children }) => {
  console.log("secondchildren", children);
  return (
    <>
      {children
        ? children.map((child) => {
            return (
              <div>
                {child.name}
                <Thirdchild child={child} />
              </div>
            );
          })
        : ""}
    </>
  );
};
export default Children;
