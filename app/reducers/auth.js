import { assign } from 'lodash'
import * as types from '../constants/ActionTypes'

export const initialState = {
  user: '',
  authenticated: false
}

export default function(state = initialState, action) {
  const { username, type } = action;

  switch (type) {

    case types.AUTHENTICATED:
      return assign({}, state, { user: username, authenticated: true })

      case types.UNAUTHENTICATED:
        return assign({}, state, { user: '', authenticated: false })

    default:
      return state;
  }
}
