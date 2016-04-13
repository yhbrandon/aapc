import { assign } from 'lodash'
import * as types from '../constants/ActionTypes'

export const initialState = {
  posts: [],
  ready: false
}

export default function(state = initialState, action) {
  const { date, title, content, type } = action

  switch(type) {
    case types.POSTS_CREATE:
      return [
        {
          id: id(),
          date: date,
          title: title,
          content: content
        }, ...state
      ]

    default:
      return state
  }
}

function id() {
  return Math.random().toString(36).substring(7);
}
