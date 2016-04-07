import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';

import configureStore from './client/store/configureStore'
import routes from './client/routes'

const store = configureStore(browserHistory)

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
