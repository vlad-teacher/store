import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./context/theme.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContext>
  </Provider>
);
