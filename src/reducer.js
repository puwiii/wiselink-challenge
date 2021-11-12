import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { transactionReducer } from "./reducers/transactionReducer";
import { walletReducer } from "./reducers/walletReducer";

const reducer = combineReducers({
  wallets: walletReducer,
  transactions: transactionReducer,
});

export const store = createStore(reducer, composeWithDevTools());
