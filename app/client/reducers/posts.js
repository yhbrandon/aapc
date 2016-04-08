import { assign } from 'lodash'
import actionTypeBuilder from '../actions/actionTypeBuilder'
import { POSTS } from '../actions/posts'

export const initialState = {
  items: [],
  ready: false
}

export default function(state = initialState, action) {
  const { data, ready, type } = action

  switch(type) {
    case actionTypeBuilder.ready(POSTS):
      return assign({}, state, { ready })

    case actionTypeBuilder.changed(POSTS):
      return assign({}, state, { items: data })

    default:
      return state
  }
}
