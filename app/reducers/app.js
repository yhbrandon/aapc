import { assign } from 'lodash'
import { SET_TITLE } from '../actions/app'

export const initialState = {
  title: 'Austin Auditory Processing Center'
}

export default function(state = initialState, action) {
  const { title, type } = action;

  switch (type) {
    case SET_TITLE:
      return assign({}, state, { title })

    default:
      return state
  }
}
