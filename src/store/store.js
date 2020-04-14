import { createStore, combineReducers } from "redux";
import app from "./reducers/app";

const combinedReducers = combineReducers({ app });

export const store = createStore(combinedReducers);
