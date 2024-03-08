import { Link, NavLink } from "react-router-dom";
import React from "react";
const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "0px",
          width: "100%",
          height: "100px",
        }}
      >
        <span style={{ marginLeft: "10px" }}>
          {" "}
          <NavLink to={"/cart"}>Cart</NavLink>
        </span>{" "}
        <span style={{ marginLeft: "10px" }}>
          <NavLink to={"/"}>Home</NavLink>
        </span>
      </div>
    </>
  );
};
export default Header;
