import { all, put, takeEvery } from "redux-saga/effects";
import { initApp } from "../store/actions/app";

export const INIT_ASYNC = "APP/INIT_ASYNC";

export function* doInitApp() {
  yield put(initApp({}));
}

export function* watchInitApp() {
  yield takeEvery(INIT_ASYNC, doInitApp);
}

export default function* rootSaga() {
  yield all([doInitApp(), watchInitApp()]);
}
