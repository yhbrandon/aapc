import actionTypeBuilder from './actionTypeBuilder';
import { newToast } from './toast';

export const POSTS = actionTypeBuilder.type('POSTS')
export const POSTS_CREATE = actionTypeBuilder.type('POSTS_CREATE')
export const POSTS_DELETE = actionTypeBuilder.type('POSTS_DELETE')
export const POSTS_EDIT = actionTypeBuilder.type('POSTS_EDIT')

export function createPost(collection) {
  return (date, title, content) => {
    return dispatch => {
      dispatch({
        type: POSTS_CREATE,
        meteor: {
          insert: {
            entity: {
              date,
              title,
              content
            },
            collection
          }
        }
      })
    }
  }
}

export function deletePost(collection) {
  return id => {
    return dispatch => {
      dispatch({
        type: POSTS_DELETE,
        meteor: {
          remove: {
            id,
            collection
          }
        }
      })
    }
  }
}


export function editPost(collection) {
  return (id) => {
    return dispatch => {
      dispatch({
        type: POSTS_EDIT,
        meteor: {
          update: {
            id,
            collection
          }
        }
      })
    }
  }
}

export function loadPosts(collection) {
  return (userId) => {

    userId = userId || Meteor.userId();

    return dispatch => {
      dispatch({
        type: POSTS,
        meteor: {
          subscribe: () => Meteor.subscribe('posts', userId, {
            onStop: error => {
              if (error && error.error === 401) {
                dispatch(newToast('Cannot load posts', true))
              }
            }
          }),
          get: () => collection.findAll()
        }
      })
    }
  }
}
