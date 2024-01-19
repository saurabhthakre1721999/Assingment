import React from "react";
const Callback = () => {
  function show(a) {
    console.log(" it show me the " + a);
  }

  function first(callback) {
    var a = 102;
    callback(a);
  }

  first(show);
  return <div></div>;
};
export default Callback;
