import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // Import the global styles
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //enables react-router-dom in our entire appli
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
