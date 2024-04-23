import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);