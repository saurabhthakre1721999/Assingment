import React, { memo } from "react";

import Grid from "@mui/material/Grid";

const Childperson2 = ({ onclickhandler, name, person, id, background }) => {
  console.log("child render", id);
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
            backgroundColor: background,
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
