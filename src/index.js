import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Redux-toolkit/Store";
// import { Rap } from "./Rap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
      {/* <Rap /> */}
    </Provider>
  </React.StrictMode>
);
