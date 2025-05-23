import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./app/store/store";

import { SpeedInsights } from "@vercel/speed-insights/react";

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SpeedInsights />
      <App />
    </Provider>
  </React.StrictMode>
);
