import React from "react";
import { render } from "react-dom";
import { store } from "./store";
import { App } from "../src/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

// setup fake backend
import { configureFakeBackend } from "./helpers/fake-backend";
configureFakeBackend();

// console.log(store.alert);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
