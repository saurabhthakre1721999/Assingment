import React, { memo } from "react";

import Grid from "@mui/material/Grid";

const Childperson2 = ({ onclickhandler, name, active, id }) => {
  console.log("child render", id, active);
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={2}
          style={{
            height: "200px",
            border: "1px solid black",
            margin: "10px",
            backgroundColor: active ? "red" : "white",
          }}
          onClick={() => onclickhandler(id)}
        >
          <span>{name}</span>
        </Grid>
      </Grid>
      ;
    </>
  );
};
export default memo(Childperson2);
