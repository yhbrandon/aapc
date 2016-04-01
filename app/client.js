import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './client/containers/App'
import configureStore from './client/store/configureStore'
import { addTest } from './client/actions'

const store = configureStore()

store.dispatch(addTest('This is a test'))

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})
