import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../containers/App'
import Home from '../containers/home/Home'
import Login from '../containers/auth/Login'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}></Route>
  </Route>
);
