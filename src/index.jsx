import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./context/theme.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContext>
);
