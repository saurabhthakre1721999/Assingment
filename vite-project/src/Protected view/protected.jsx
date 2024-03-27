import { Navigate, useLocation } from "react-router-dom";
import React from "react";
const login = true;
const Protectedview = ({ children }) => {
  const { pathname } = useLocation("");
  console.log(pathname);
  if (!login && pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return children;
};
export default Protectedview;
