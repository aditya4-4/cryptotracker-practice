import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WatchListProvider from "./context/watchListProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WatchListProvider>
      <App />
    </WatchListProvider>
  </React.StrictMode>
);
