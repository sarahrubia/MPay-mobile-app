import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({ authReducer });

export const store = createStore(rootReducer);
