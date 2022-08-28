import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SearchEngineProvider } from "./context/SearchEngineContext";

const divsToUpdate = document.querySelectorAll(".root");

divsToUpdate.forEach((div) => {
  ReactDOM.render(
    <SearchEngineProvider>
      <App />
    </SearchEngineProvider>,
    div
  );
  div.classList.remove("root");
});
