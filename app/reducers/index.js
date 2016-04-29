import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app';
import posts from './posts';

export default combineReducers({
  app,
  posts,
  routing: routerReducer,
});
