import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearNotification } from '../actions/notifications'

import App from '../components/App'

function mapStateToProps(state) {
  return {
    title: state.app.title,
    user: state.auth.user,
    authenticated: state.auth.authenticated,
    notify: state.notifications.notify,
    message: state.notifications.message
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearNotification
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
