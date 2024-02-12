import React from "react";
import { useState } from "react";

const Children = ({ Tree }) => {
  const [Showchild, SetShowchild] = useState(false);
  const showitems = () => {
    SetShowchild(!Showchild);
  };
  console.log("secondchildren", Tree);
  return (
    <>
      {Tree.map((tree) => {
        return (
          <div>
            <button onClick={showitems}>{tree.name}</button>
            {tree.children && (
              <div style={{ display: Showchild ? "none" : "block" }}>
                <Children Tree={tree.children} />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
export default Children;
