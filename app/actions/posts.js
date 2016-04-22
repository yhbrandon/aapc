import * as types from '../constants/ActionTypes'

export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_POSTS})
  }
}

export function createPost(post) {
  return (dispatch) => {
    dispatch({
      type: types.INSERT_POST,
      post
    })
  }
}

export function deletePost(id) {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_POST,
      id
    })
  }
}


export function editPost(id, title, banner, content) {
  return (dispatch) => {
    dispatch({
      type: types.EDIT_POST,
      id: id,
      title: title,
      banner: banner,
      content: content
    })
  }
}
