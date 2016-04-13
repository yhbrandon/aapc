import * as type from '../constants/ActionTypes'

export function createPost() {
  return (date, title, content) => {
    return dispatch => {
      dispatch({
        type: type.POSTS_CREATE,
        date: date,
        title: title,
        content: content
      })
    }
  }
}

export function deletePost() {
  return (id) => {
    return dispatch => {
      dispatch({
        type: type.POSTS_DELETE,
        id
      })
    }
  }
}


export function editPost() {
  return (id) => {
    return dispatch => {
      dispatch({
        type: type.POSTS_EDIT,
        id
      })
    }
  }
}
