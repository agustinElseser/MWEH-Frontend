import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./slider.css";

const divRoot = ReactDOM.createRoot(document.querySelector("#root"));
divRoot.render(<App />);
