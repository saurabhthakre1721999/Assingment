import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home/Home.jsx";
import Context from "./context/context.jsx";
import Navigator from "./Navigation/Navigator.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <Navigator />
  </Context>
);
