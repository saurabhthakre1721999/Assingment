import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import Todo from "./todo.jsx";
import Form from "../registraton.jsx";
import Callback from "./callback.jsx";
import Api from "../apifecth.jsx";
import Person from "./personpecker.jsx";
//import SearchInList from "./ravi.jsx";
//import SearchInLis from "./ravi2.jsx";
import Approuter from "./router/approuter.jsx";
import Allproducts from "./assignment/home.jsx";
import Allproductsrout from "./assignment/rout.jsx";

//import Home from "./components/Homefiter.jsx";
import Home from "./components/Homefiter.jsx";
//import Home from "./router/home.jsx";
// import Perso from "./new.jsx";
// import Pers from "./new.jsx";
//import Per from "./chat.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
