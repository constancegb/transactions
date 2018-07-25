import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  // devrait être le dernier test de ce fichier car après ça on est déconnecté
  it('should logout', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // le token devrait avoir la valeur définie dans test/jestsetup.js
    expect(store.getState().auth.token).toEqual('token');
    // clic sur le bouton logout
    wrapper.find('#logout-btn').simulate('click');
    // l'application devrait désormais afficher le composant NotLoggedIn
    expect(wrapper.find('NotLoggedIn')).toHaveLength(1);
    // le token devrait être à null
    expect(store.getState().auth.token).toEqual(undefined);
  });
});
