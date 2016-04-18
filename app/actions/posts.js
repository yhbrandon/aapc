import * as types from '../constants/ActionTypes'

export function createPost(date, title, banner, content) {
  return (dispatch) => {
    dispatch({
      type: types.CREATE_POST,
      date: date,
      title: title,
      banner: banner,
      content: content
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

export function selectAdminPost(id) {
  return (dispatch) => {
    dispatch({
      type: types.SELECT_ADMIN_POST,
      id
    })
  }
}
