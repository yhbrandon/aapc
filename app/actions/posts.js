import * as types from '../constants/ActionTypes'

export function createPost(date, title, banner, content) {
  return (dispatch) => {
    dispatch({ type: types.CREATE_POST, date: date, title: title, banner: banner, content: content })
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
