import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import appReducer from "./reducers/app";
import { default as appSaga } from "../sagas/app";

const combinedReducers = combineReducers({ app: appReducer });
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combinedReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(appSaga);
