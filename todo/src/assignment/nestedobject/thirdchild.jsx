import { useState } from "react";
import Forthchild from "./forth";

const Thirdchild = ({ child }) => {
  console.log(" thirdchild", child);
  return (
    <>
      {child.children
        ? child.children.map((chil) => {
            return (
              <div>
                {chil.name}
                <Forthchild child={chil} />
              </div>
            );
          })
        : ""}
    </>
  );
};
export default Thirdchild;
