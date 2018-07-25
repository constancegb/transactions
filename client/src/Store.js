import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appFront from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  appFront,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
