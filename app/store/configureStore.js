import { createStore, compose, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(browserHistory)

const middlewares = [
  thunkMiddleware,
  loggerMiddleware,
  reduxRouterMiddleware,
]

const finalCreateStore = compose(
  applyMiddleware(...middlewares)
)(createStore)

export default function configureStore(history, initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  return store;
}
