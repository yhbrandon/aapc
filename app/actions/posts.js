import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts())
    return fetch('https://www.googleapis.com/blogger/v3/blogs/4470603525624087576/posts?key=AIzaSyD0KeGj4PHRdd0Qu-3dWoICV1p6mbZnjNo')
      .then(response => response.json())
      .then(json => dispatch(recievePosts(json)))
  }
}

function recievePosts(data) {
  return {
    type: types.RECEIVE_POSTS,
    posts: data.items
  }
}

function requestPosts(subreddit) {
  return {
    type:  types.REQUEST_POSTS
  }
}
