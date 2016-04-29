import * as types from '../constants/ActionTypes'
import moment from 'moment'
import { parsePosts } from '../utils/parse'

export const initialState = {
  isFetching: false,
  posts: []
}

const posts = (state = initialState, action) => {

  switch (action.type) {
    case types.REQUEST_POSTS:
      return Object.assign({}, state, { isFetching: true })

    case types.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      });

    default:
      return state
  }
}

export default posts
