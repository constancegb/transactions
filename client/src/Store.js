import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appFront from './reducers';
import sagas from './sagas';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const sagaMiddleware = createSagaMiddleware();

const token = Cookies.get('token');
let user;
if (token) {
  try {
    const decoded = jwt_decode(token);
    user = decoded;
    user.token = token;
  } catch (err) {
    // invalid token
    // nothing to do because token will not be set to the store's state
    // therefore we will be redirected to login
  }
}

const persistedState = {
  auth: user
};

const store = createStore(
  appFront,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
