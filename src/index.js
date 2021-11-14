import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { walletReducer } from "./reducers/walletReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { transactionReducer } from "./reducers/transactionReducer";

const reducer = combineReducers({
  wallets: walletReducer,
  transactions: transactionReducer,
});

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(reducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
