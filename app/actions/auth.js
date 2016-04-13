import * as types from '../constants/ActionTypes'
import { db } from '../index'
import { push } from 'react-router-redux'
import { showNotification } from './notifications'

export function loginWithPassword(username, password) {
  return dispatch => {
    return db.login(username, password, function (err, response) {
      if (err) {
        dispatch(showNotification('Could not authenticate'))
      } else {
        dispatch({
          type: types.AUTHENTICATED,
          username
        })
        dispatch(push('/blog'))
      }
    })
  }
}
