import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

import { createStore, applyMiddleware } from 'redux';
import partnerApp from '../src/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from '../src/sagas';
import Api from '../src/lib/Api';
import { initConfig } from '../src/config';

async function start() {
  Enzyme.configure({ adapter: new Adapter() });

  global.shallow = shallow;
  global.render = render;
  global.mount = mount;
  global.shallowToJson = shallowToJson;

  const sagaMiddleware = createSagaMiddleware();

  const persistedState = {
    auth: {
      token: 'token',
      display_name: 'Npm Test'
    }
  };

  global.store = createStore(
    partnerApp,
    persistedState,
    applyMiddleware(sagaMiddleware)
  );

  await initConfig();

  Api.init(global.store);

  sagaMiddleware.run(sagas);

  global.mockResponse = (status, statusText, response) => {
    return {
      status: status,
      ok: status === 200,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      },
      json: () => {
        return Promise.resolve(response);
      }
    };
  };
}

start();
