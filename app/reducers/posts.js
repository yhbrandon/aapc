import { assign } from 'lodash'
import * as types from '../constants/ActionTypes'
import { showNotification } from '../actions/notifications'
import moment from 'moment'

export const initialState = []

const posts = (state = initialState, action) => {

  switch(action.type) {
    case types.INSERT_POST:
      const id = {
        _id:Math.random().toString(36).substring(7),
        date: moment().startOf('day').toDate()
      }

      return [ ...state, Object.assign({}, action.post, id) ]

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

export default posts
