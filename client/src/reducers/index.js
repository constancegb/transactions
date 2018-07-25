import { combineReducers } from 'redux';
import { transactions } from './transactions';

const appFront = combineReducers({
  transactions
});

export default appFront;
