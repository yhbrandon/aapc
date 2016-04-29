import * as types from '../constants/ActionTypes';
import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  const applyMiddlewares = applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory),
    createLogger()
  );

  const finalCreateStore = compose(
    applyMiddlewares
  )(createStore);

  let store = finalCreateStore(
    rootReducer,
    initialState
  );

  return store;

}
