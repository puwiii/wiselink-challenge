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

const store = createStore(reducer, composeWithDevTools());

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
