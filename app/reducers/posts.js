import { assign } from 'lodash'
import * as types from '../constants/ActionTypes'
import { db } from '../index'
import { showNotification } from '../actions/notifications'
import { persistentReducer } from 'redux-pouchdb'

export const initialState = []

const posts = (state = initialState, action) => {

  switch(action.type) {
    case types.CREATE_POST:
      const id = Math.random().toString(36).substring(7)

      return [
        {
          id: id,
          date: action.date,
          banner: action.banner,
          title: action.title,
          content: action.content
        },
        ...state
      ]

    case types.EDIT_POST:
      return state.map(post =>
        post.id === action.id ?
          Object.assign({}, post, { title: action.title, banner: action.banner, content: action.content }) :
          post
      )

    default:
      return state
  }
}

export default persistentReducer(posts)
