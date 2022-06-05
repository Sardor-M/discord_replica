import React from "react";
import store from "./app/store";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
