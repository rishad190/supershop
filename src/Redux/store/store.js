import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducers from "../reducers/cartReducers";

export const store = createStore(cartReducers, composeWithDevTools());
