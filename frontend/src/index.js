import React from "react";
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";


const root = createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

reportWebVitals();

