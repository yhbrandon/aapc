import * as types from '../constants/ActionTypes'

export function showNotification(message) {
  return {
    type: types.SHOW_NOTIFICATION,
    message
  }
}

export function clearNotification() {
  return {
    type: types.CLEAR_NOTIFICATION
  }
}
