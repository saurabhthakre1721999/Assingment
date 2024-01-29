import React from "react";
import Input from "./input";
import { useState } from "react";
import styled from "styled-components";
import Picker from "./picker";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
const Filter = ({ onchangefilter }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        {" "}
        <InputLabel>filters</InputLabel>
        <Select
          name="Filters"
          id=""
          label="Age"
          onChange={(e) => onchangefilter(e)}
        >
          <MenuItem value={"none"}>none</MenuItem>
          <MenuItem value={"contrast(47)"}>contrast</MenuItem>
          <MenuItem value={"gryscale(47)"}>gryscale</MenuItem>
          <MenuItem value={"Ashby(45)"}>Ashby</MenuItem>
          <MenuItem value={"sepia()"}>sepia</MenuItem>
        </Select>{" "}
      </FormControl>
    </div>
  );
};
export default Filter;
