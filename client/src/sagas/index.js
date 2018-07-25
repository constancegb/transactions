import { all, fork } from 'redux-saga/effects';
import logoutSaga from './logout';

export default function*() {
  yield all([
    fork(logoutSaga)
  ]);
}
