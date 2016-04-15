import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { db } from '../store/configureStore'
import App from '../containers/App'
import Home from '../containers/home/Home'
import Login from '../containers/auth/Login'
import Admin from '../containers/admin/Admin'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}></Route>
    <Route path="admin" component={Admin} onEnter={requireAuth}></Route>
  </Route>
)

function requireAuth(nextState, replace, asyncTransition) {
  return db.getSession(function (err, response) {
    if (err) {
      replace('/login')
    } else if (!response.userCtx.name) {
			replace('/login')
    } else {
      console.debug(response.userCtx.name, 'is logged in.')
    }
    asyncTransition()
  })
}
