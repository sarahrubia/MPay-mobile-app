import { combineReducers, legacy_createStore as createStore } from 'redux';
import auth from './auth/reducers';

const rootReducer = combineReducers({ auth });

export const store = createStore(rootReducer);
