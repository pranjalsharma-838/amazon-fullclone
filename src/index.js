import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />,
  </StateProvider>
);
