import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './reducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
