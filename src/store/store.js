import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

// Compose: para usar o Redux DevTools
const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
