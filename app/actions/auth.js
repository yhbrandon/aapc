import * as types from '../constants/ActionTypes'
import { db } from '../store/configureStore'
import { push } from 'react-router-redux'
import { showNotification } from './notifications'

export function login(username, password) {
  return dispatch => {
    return db.login(username, password, function (err, response) {
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

export function logout() {
  return dispatch => {
    return db.logout(function (err, response) {
      if (err) {
        dispatch({ type: types.ERROR, err })
      } else {
        dispatch({ type: types.UNAUTHENTICATED })
        dispatch(push('/login'))
      }
    })
  }
}
