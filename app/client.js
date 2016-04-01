import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';

import configureStore from './client/store/configureStore'
import routes from './client/routes'
import { addTest } from './client/actions'

const store = configureStore(browserHistory)

store.dispatch(addTest('This is a test'))

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('root')
  );
})
