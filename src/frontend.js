import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const divsToUpdate = document.querySelectorAll(".root");

divsToUpdate.forEach((div) => {
  ReactDOM.render(<App />, div);
  div.classList.remove("root");
});
