import React from "react";

import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import { green } from "@mui/material/colors";
const Childperson2 = ({ Allperson, onclickhandler, person }) => {
  console.log("child data", Allperson);
  return (
    <>
      <Grid container spacing={2}>
        {Allperson.length !== 0 &&
          Allperson.map((per) => {
            return (
              <Grid
                item
                xs={2}
                key={per.id}
                style={{
                  height: "200px",
                  border: "1px solid black",
                  margin: "10px",
                  backgroundColor: SelectedId === per.id ? "green" : "",
                }}
                onClick={() => onclickhandler(per.id)}
              >
                <span>{person.name}</span>
              </Grid>
            );
          })}
      </Grid>
      ;
    </>
  );
};
export default Childperson2;
