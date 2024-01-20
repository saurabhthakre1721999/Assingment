import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import Todo from "./todo.jsx";
import Form from "../registraton.jsx";
import Callback from "./callback.jsx";
import Api from "../apifecth.jsx";
import Person from "./personpecker.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Person />
  </React.StrictMode>
);
