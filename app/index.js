import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import PouchDB from 'pouchdb'
import Auth from 'pouchdb-authentication'
import configureStore from './store/configureStore'
import routes from './routes'

PouchDB.plugin(Auth)
export const db = new PouchDB('http://localhost:5984/users', {skipSetup: true})

if (typeof window != "undefined") window.PouchDB = PouchDB

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
