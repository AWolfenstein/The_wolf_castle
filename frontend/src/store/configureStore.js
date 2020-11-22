import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [logger, thunk];
const middlewareEnhancer = applyMiddleware(...middlewares)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middlewareEnhancer);
}
