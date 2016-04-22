import * as types from '../constants/ActionTypes'
import PouchDB from "pouchdb"
import db from '../store/db'
import { push } from 'react-router-redux'
import { showNotification } from './notifications'

let message = ''
const remoteDB = new PouchDB('http://localhost:5984/_users', {skip_setup: true})

export function resumeSession() {
  return dispatch => {
    return remoteDB.getSession(function (err, response, asyncTransition) {
      if (err) {
        message = 'Cannot connect to database'
        dispatch({ type: types.SHOW_NOTIFICATION, message })
      } else if(!response.userCtx.name) {
        dispatch(push('/login'));
      } else {
        message = 'Welcome back ' + response.userCtx.name;
        dispatch({ type: types.SHOW_NOTIFICATION, message })
      }
    })

  }
}

export function login(username, password) {
  return dispatch => {
    return remoteDB.login(username, password, function (err, response) {
      if (err) {
        let message = 'Login unsuccessful please try again'
        dispatch({ type: types.SHOW_NOTIFICATION, message })
      } else {
        dispatch({ type: types.AUTHENTICATED, username })
        dispatch(push('/admin'))
      }
    })
  }
}
