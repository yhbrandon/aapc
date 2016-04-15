import { assign } from 'lodash'
import * as types from '../constants/ActionTypes'

export const initialState = {
  title: ''
}

export default function(state = initialState, action) {
  const { title, type } = action;

  switch (type) {
    case types.SET_TITLE:
      return assign({}, state, { title: title })

    default:
      return state
  }
}
