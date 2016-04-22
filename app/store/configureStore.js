import * as types from '../constants/ActionTypes'
import { createStore, compose, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import PouchMiddleware from 'pouch-redux-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import db from "./db"

export default function configureStore(initialState) {
  const pouchMiddleware = PouchMiddleware({
    path: '/posts',
    db,
    actions: {
      remove: doc => store.dispatch({type: types.DELETE_POST, post: doc}),
      insert: doc => store.dispatch({type: types.INSERT_POST, post: doc}),
      update: doc => store.dispatch({type: types.UPDATE_POST, post: doc}),
    }
  })

  const applyMiddlewares = applyMiddleware(
    pouchMiddleware,
    thunkMiddleware,
    routerMiddleware(browserHistory),
    createLogger()
  )

  const finalCreateStore = compose(
    applyMiddlewares
  )(createStore)

  let store = finalCreateStore(
    rootReducer,
    initialState
  )

  return store;

}
