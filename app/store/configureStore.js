import * as types from '../constants/ActionTypes'
import { createStore, compose, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import PouchDB from 'pouchdb'
import Auth from 'pouchdb-authentication'
import { persistentStore } from 'redux-pouchdb'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(browserHistory)

PouchDB.plugin(Auth)
export const db = new PouchDB('http://localhost:5984/aapc')

const middlewares = [
  thunkMiddleware,
  loggerMiddleware,
  reduxRouterMiddleware,
]

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  persistentStore(db)
)(createStore)

export default function configureStore(history, initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  return store;
}
