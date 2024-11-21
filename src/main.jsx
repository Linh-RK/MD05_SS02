import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// nơi khởi tạo các element cho dự án
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
