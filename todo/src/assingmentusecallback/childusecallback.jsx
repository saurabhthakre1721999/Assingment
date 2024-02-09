import React, { memo } from "react";

import Grid from "@mui/material/Grid";

const Childperson = ({ Allperson, onclickhandler }) => {
  console.log("child data", Allperson);
  return (
    <>
      <Grid container spacing={2}>
        {Allperson.map((per) => {
          return (
            <Grid
              item
              xs={2}
              key={per.id}
              style={{
                height: "200px",
                border: "1px solid black",
                margin: "10px",
              }}
              onClick={() => onclickhandler(per.id)}
            >
              <span>{per.name}</span>
            </Grid>
          );
        })}
      </Grid>
      ;
    </>
  );
};
export default memo(Childperson);
