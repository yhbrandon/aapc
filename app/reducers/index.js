import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import app from './app'
import notifications from './notifications'
import posts from './posts'

export default combineReducers({
  app,
  auth,
  notifications,
  posts,
  routing: routerReducer
});
