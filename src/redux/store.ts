import { legacy_createStore as createStore } from 'redux';
import counterReducer from './reducer';

export const store = createStore(counterReducer);
