import { assign } from 'lodash'
import * as types from '../constants/ActionTypes'

export const initialState = {
  notify: false,
  message: ''
}

export default function(state = initialState, action) {
  const { message, type } = action;

  switch (type) {
    case types.SHOW_NOTIFICATION:
      return assign({}, state, { notify: true, message: message})

    case types.CLEAR_NOTIFICATION:
      return assign({}, state, { notify: false, message: ''})

    default:
      return state
  }
}
