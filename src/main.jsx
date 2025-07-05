import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import Routers from "./routes.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routers />
  </StrictMode>
);
