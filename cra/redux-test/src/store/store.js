import { legacy_createStore as createStore } from "redux";
import combineReducer from "./combineReducer";

export const store = createStore(combineReducer);
