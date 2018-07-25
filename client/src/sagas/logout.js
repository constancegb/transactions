import { takeEvery } from "redux-saga/effects";
import { LOGOUT } from "../actions/logout";
import Cookies from "js-cookie";

function* logout(action) {
  yield Cookies.remove("token");
}

export default function* logoutSaga() {
  yield takeEvery(LOGOUT, logout);
}
