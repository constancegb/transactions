import { logout } from '../actions/logout';

let store;

export const get = (route, options) => {
  return callApi(route, 'GET', undefined, options);
};

export const post = (route, body, options) => {
  return callApi(route, 'POST', body, options);
};

export const callApi = (route, method, body, options) => {
  const token = store.getState().auth.token;
  options = {
    method,
    body,
    headers: { Authorization: `Bearer ${token}` },
    ...options
  };
  return fetch(`/api/${route}`, options).then(response => {
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        store.dispatch(logout());
      }
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export const init = _store => {
  store = _store;
};

const Api = {
  get,
  post,
  callApi,
  init
};

export default Api;
