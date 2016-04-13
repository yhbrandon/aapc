import { assign } from 'lodash'
import * as types from '../constants/ActionTypes'

export const initialState = {
  user: ''
}

export default function(state = initialState, action) {
  const { username, type } = action;

  switch (type) {

    case types.AUTHENTICATED:
      return assign({}, state, { user: username });

    default:
      return state;
  }
}
