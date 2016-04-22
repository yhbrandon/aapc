import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import Home from '../containers/home/Home'
import Login from '../containers/auth/Login'
import Admin from '../containers/admin/Admin'
import { resumeSession } from '../actions/auth'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}></Route>
    <Route path="admin" component={Admin} onEnter={resumeSession}></Route>
  </Route>
)
