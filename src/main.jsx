import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./slider.css";

// import { hydrateRoot } from "react-dom/client";
// const container = document.getElementById("root");
// const root = hydrateRoot(container, <App tab="home" />);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
