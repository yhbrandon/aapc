import { assign, find } from 'lodash'
import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'
import { persistentReducer } from 'redux-pouchdb'

export const initialState = {
  posts: [],
  selectedAdminPost: {}
}

const posts = (state = initialState, action) => {

  switch(action.type) {
    case types.CREATE_POST:
      const id = Math.random().toString(36).substring(7)
      const obj = {
        id: id,
        date: action.date,
        banner: action.banner,
        title: action.title,
        content: action.content
      }

      return Object.assign({}, state, { posts: [obj] })

    case types.SELECT_ADMIN_POST:
      const selected = state.posts.find(post =>
        post.id === action.id
      )

      return Object.assign({}, state, {
        selectedAdminPost: selected
      })

    default:
      return state
  }
}

export default persistentReducer(posts)
