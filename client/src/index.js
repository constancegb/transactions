import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store';
import Api from './lib/Api';
import { initConfig } from './config';

async function start() {
  await initConfig();

  Api.init(store);

  ReactDOM.render(
    <Provider store={store}>
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
}

start();
